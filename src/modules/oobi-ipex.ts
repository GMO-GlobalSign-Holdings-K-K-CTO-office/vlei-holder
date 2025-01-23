import * as signify from "signify/signify-ts.mjs";
import { Contact } from "@/modules/repository";
import { IllegalStateException } from "@/modules/exception";
import { AID_NAME, QVI_SCHEMA_SAID } from "@/modules/const";

export interface OobiIpexHandler {
  progress(client: signify.SignifyClient, holder: Contact): Promise<void>;
}

// Note: 現状、各Handlerの最後に状態を遷移させてはいない。
// フロントとAgentで二重管理にするのは避けたいので、Agent側の状態を確認して、逐次状態を反映させる。

// OOBI Part
export class MyChallengeSender implements OobiIpexHandler {
  async progress(client: signify.SignifyClient, holder: Contact) {
    console.log("ChallengeSender started.");

    // チャレンジ送信専用のメソッドがclientにない。
    // とりあえずlow-levelなexchangeを使って、チャレンジを送信するが、ここはGLEIFに問い合わせる。
    // Challengeをビデオチャット経由で送信してもいいのか？(そうするべきなら、Challenge生成のUIを作る。)
    const sender = await client.identifiers().get("aid");
    const challengeSmall = await client.challenges().generate(128);
    sessionStorage.setItem(
      `challenge-${holder.pre}`,
      JSON.stringify(challengeSmall),
    );

    const resp = await client
      .exchanges()
      .send(
        "aid",
        "challenge",
        sender,
        "/challenge",
        { words: challengeSmall.words },
        {},
        [holder.pre],
      );
    console.log(`Challenge Sent: ${JSON.stringify(resp, null, 2)}`);
    console.log("ChallengeSender finished.");
  }
}

export class YourResponseValidator implements OobiIpexHandler {
  async progress(client: signify.SignifyClient, holder: Contact) {
    console.log("ChallengeResponseValidator started.");

    const challengeWord = sessionStorage.getItem(`challenge-${holder.pre}`);
    if (!challengeWord) {
      throw new Error("Challenge not found.");
    }

    const verifyOperation = await client
      .challenges()
      .verify(holder.pre, JSON.parse(challengeWord).words);
    console.log(`VerifyOperation: ${JSON.stringify(verifyOperation, null, 2)}`);

    await client.operations().wait(verifyOperation);
    await client.operations().delete(verifyOperation.name);

    type VerifyResponse = {
      // exn = exchange
      exn: Record<string, unknown>;
    };
    const verifyResponse = verifyOperation.response as VerifyResponse;
    const serder = new signify.Serder(verifyResponse.exn);

    const resp = await client.challenges().responded(holder.pre, serder.ked.d);

    console.log(`Responsed Resp: ${JSON.stringify(resp, null, 2)}`);
    console.log("ChallengeResponseValidator finished.");
  }
}

export class MyResponseSender implements OobiIpexHandler {
  async progress(client: signify.SignifyClient, holder: Contact) {
    console.log("ResponseSender started.");

    const response = await client
      .challenges()
      .respond("aid", holder.pre, holder.challenge);
    console.log(`Response Sent: ${JSON.stringify(response, null, 2)}`);

    console.log("ResponseSender finished.");
  }
}

// IPEX Part
export class CredentialAccepter implements OobiIpexHandler {
  async progress(client: signify.SignifyClient, holder: Contact) {
    console.log("IssuerAdmitter started.");
    // const holderNotifications = await waitForNotifications(
    //   holderClient,
    //   "/exn/ipex/grant",
    // );
    // const grantNotification = holderNotifications[0]; // should only have one notification right now

    // const [admit, sigs, aend] = await holderClient.ipex().admit({
    //   senderName: holderAid.name,
    //   message: "",
    //   grantSaid: grantNotification.a.d!,
    //   recipient: issuerAid.prefix,
    //   datetime: createTimestamp(),
    // });
    // const op = await holderClient
    //   .ipex()
    //   .submitAdmit(holderAid.name, admit, sigs, aend, [issuerAid.prefix]);
    // await waitOperation(holderClient, op);

    // await markAndRemoveNotification(holderClient, grantNotification);

    // TODO: 大枠はこれでいい。
    if (!holder.notification) {
      throw new IllegalStateException("Notification not found.");
    }

    await client.notifications().mark(holder.notification.i);
    await client.notifications().delete(holder.notification.i);

    console.log("IssuerAdmitter finished.");
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
  | "4_2_credential_accepted";
