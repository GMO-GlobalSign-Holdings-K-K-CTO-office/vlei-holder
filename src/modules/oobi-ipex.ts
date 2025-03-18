import { SignifyClient, Serder, IpexAdmitArgs } from "signify-ts";
import { Signifies, type ExtendedContact } from "@/modules/repository";
import { IllegalStateException } from "@/modules/exception";
import { AidName } from "./const";
import { LogAllMethods } from "./decorator";

export interface OobiIpexHandler {
  progress(client: SignifyClient, issuer: ExtendedContact): Promise<void>;
}

export class MyChallengeSentCallback implements OobiIpexHandler {
  async progress(client: SignifyClient, holder: ExtendedContact) {
    const repository = await Signifies.getInstance();
    await repository.setIpexState("3_1_challenge_sent", holder.id);
  }
}

@LogAllMethods
export class YourResponseValidator implements OobiIpexHandler {
  async progress(client: SignifyClient, issuer: ExtendedContact) {
    // TODO: Signifiesに移行する。
    const challengeWord = sessionStorage.getItem(`challenge-${issuer.pre}`);
    if (!challengeWord) {
      throw new Error("Challenge not found.");
    }

    const verifyOperation = await client
      .challenges()
      .verify(issuer.id, challengeWord.split(","));
    console.log(`VerifyOperation: ${JSON.stringify(verifyOperation, null, 2)}`);

    // TODO: Waitが終わらない。原因調査中。
    try {
      await client
        .operations()
        .wait(verifyOperation, { signal: AbortSignal.timeout(10000) });
      console.log("Done verify op waiting");
      await client.operations().delete(verifyOperation.name);
      console.log("Done verify op deleting");

      type VerifyResponse = {
        // exn = exchange
        exn: Record<string, unknown>;
      };
      const verifyResponse = verifyOperation.response as VerifyResponse;
      const serder = new Serder(verifyResponse.exn);

      const resp = await client.challenges().responded(issuer.id, serder.ked.d);

      console.log(`Responsed Resp: ${JSON.stringify(resp, null, 2)}`);
    } catch (e) {
      console.log("Verify Operation Waitng or Deleting Error: ", e);
      alert(
        "Verification timeout. We're investigating the issue. Please go to the next step.",
      );

      const repository = await Signifies.getInstance();
      await repository.setIpexState("2_3_response_validated", issuer.id);
    }
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

    const repository = await Signifies.getInstance();
    await repository.setIpexState("2_2_response_sent", issuer.id);

    // TODO: Temporary
    // verifyが終わらないため、とりあえず次のステップに進む
    setTimeout(async () => {
      await repository.setIpexState("2_3_response_validated", issuer.id);
    }, 30000);
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
  | "5_1_credential_revoked";

// TODO: common.tsを作り移動する
const formatStateMap: Map<OobiIpexState, string> = new Map();
formatStateMap.set("1_init", "Init");
formatStateMap.set("2_1_challenge_received", "Your Challenge Received / NONE");
formatStateMap.set("2_2_response_sent", "My Response Sent / NONE");
formatStateMap.set("2_3_response_validated", "My Response Validated / NONE");
formatStateMap.set(
  "3_1_challenge_sent",
  "My Response Validated / My Challenge Sent",
);
formatStateMap.set(
  "3_2_response_received",
  "My Response Validated / Your Response Received",
);
formatStateMap.set(
  "3_3_response_validated",
  "My Response Validated / Your Response Validated",
);
formatStateMap.set("4_1_credential_received", "Credential Received");
formatStateMap.set("4_2_credential_accepted", "Credential Accepted");
formatStateMap.set("5_1_credential_revoked", "Credential Revoked");

export const formatState = (state: OobiIpexState) => {
  const formatted = formatStateMap.get(state);
  if (!formatted) {
    throw new IllegalStateException("State not found.");
  }
  return formatted;
};
