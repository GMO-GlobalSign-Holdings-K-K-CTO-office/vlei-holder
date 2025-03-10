import { SignifyClient, Serder, IpexAdmitArgs } from "signify-ts";
import { Signifies, type ExtendedContact } from "@/modules/repository";
import { IllegalStateException } from "@/modules/exception";
import { AidName } from "./const";
import { LogAllMethods } from "./decorator";

export interface OobiIpexHandler {
  progress(client: SignifyClient, issuer: ExtendedContact): Promise<void>;
}

// Note: 現状、各Handlerの最後に状態を遷移させてはいない。
// フロントとAgentで二重管理にするのは避けたいので、Agent側の状態を確認して、逐次状態を反映させる。

// OOBI Part
// Important!!: Githubで聞いた結果、チャレンジはOut-of-Bandで送信するのプラクティスとのこと

// export class MyChallengeSender implements OobiIpexHandler {
//   async progress(client: SignifyClient, issuer: Contact) {

//     // チャレンジ送信専用のメソッドがclientにない。
//     // とりあえずlow-levelなexchangeを使って、チャレンジを送信するが、ここはGLEIFに問い合わせる。
//     // Challengeをビデオチャット経由で送信してもいいのか？(そうするべきなら、Challenge生成のUIを作る。)
//     const sender = await client.identifiers().get("aid");
//     const challengeSmall = await client.challenges().generate(128);
//     sessionStorage.setItem(
//       `challenge-${issuer.pre}`,
//       JSON.stringify(challengeSmall),
//     );

//     const resp = await client
//       .exchanges()
//       .send(
//         "aid",
//         "challenge",
//         sender,
//         "/challenge",
//         { words: challengeSmall.words },
//         {},
//         [issuer.pre],
//       );
//     console.log(`Challenge Sent: ${JSON.stringify(resp, null, 2)}`);
//   }
// }

@LogAllMethods
export class YourResponseValidator implements OobiIpexHandler {
  async progress(client: SignifyClient, issuer: ExtendedContact) {
    const challengeWord = sessionStorage.getItem(`challenge-${issuer.pre}`);
    if (!challengeWord) {
      throw new Error("Challenge not found.");
    }

    const verifyOperation = await client
      .challenges()
      .verify(issuer.id, JSON.parse(challengeWord).words);
    console.log(`VerifyOperation: ${JSON.stringify(verifyOperation, null, 2)}`);

    await client.operations().wait(verifyOperation);
    await client.operations().delete(verifyOperation.name);

    type VerifyResponse = {
      // exn = exchange
      exn: Record<string, unknown>;
    };
    const verifyResponse = verifyOperation.response as VerifyResponse;
    const serder = new Serder(verifyResponse.exn);

    const resp = await client.challenges().responded(issuer.id, serder.ked.d);

    console.log(`Responsed Resp: ${JSON.stringify(resp, null, 2)}`);
  }
}

@LogAllMethods
export class MyResponseSender implements OobiIpexHandler {
  async progress(client: SignifyClient, issuer: ExtendedContact) {
    if (!issuer.challenges) {
      throw new IllegalStateException("Challenges are not set.");
    }

    const response = await client
      .challenges()
      .respond("aid", issuer.id, issuer.challenges);
    console.log(`Response Sent: ${JSON.stringify(response, null, 2)}`);
    Signifies.setIpexState("2_2_response_sent", issuer.id);
  }
}

// IPEX Part
@LogAllMethods
export class CredentialAccepter implements OobiIpexHandler {
  async progress(client: SignifyClient, issuer: ExtendedContact) {
    if (!issuer.notification) {
      throw new IllegalStateException("Notification not found.");
    }

    const aid: AidName = "aid";
    const holder = await client.identifiers().get(aid);

    const admitArgs: IpexAdmitArgs = {
      senderName: holder.name,
      recipient: issuer.id,
      message: "",
      grantSaid: issuer.notification.a.d!,
      datetime: new Date().toISOString().replace("Z", "000+00:00"),
    };
    const [admitSerder, sigs, aend] = await client.ipex().admit(admitArgs);

    const admitOperation = await client
      .ipex()
      .submitAdmit(holder.name, admitSerder, sigs, aend, [issuer.id]);

    await client.operations().wait(admitOperation);
    await client.operations().delete(admitOperation.nadme);
    await client.notifications().mark(issuer.notification.i);
    await client.notifications().delete(issuer.notification.i);
  }
}

export type OobiIpexState =
  | "1_init" // 初期状態
  | "2_1_challenge_received" // チャレンジ受理
  | "2_2_response_sent" // レスポンス送信済み
  | "2_3_response_validated" // 送信したレスポンスが検証済み
  | "3_1_challenge_sent" // チャレンジ送信
  | "3_2_response_received" // レスポンス受理
  | "3_3_response_validated" // レスポンス検証済み
  | "4_1_credential_received"
  | "4_2_credential_accepted"
  | "5_1_credentiial_revoked";

const formatStateMap: Map<OobiIpexState, string> = new Map();
formatStateMap.set("1_init", "Init");
formatStateMap.set("2_1_challenge_received", "Challenge Received");
formatStateMap.set("2_2_response_sent", "Response Sent");
formatStateMap.set("2_3_response_validated", "Response Validated");
formatStateMap.set("3_1_challenge_sent", "Challenge Sent");
formatStateMap.set("3_2_response_received", "Response Received");
formatStateMap.set("3_3_response_validated", "Response Validated");
formatStateMap.set("4_1_credential_received", "Credential Received");
formatStateMap.set("4_2_credential_accepted", "Credential Accepted");
formatStateMap.set("5_1_credentiial_revoked", "Credential Revoked");

export const formatState = (state: OobiIpexState) => {
  const formatted = formatStateMap.get(state);
  if (!formatted) {
    throw new IllegalStateException("State not found.");
  }
  return formatted;
};
