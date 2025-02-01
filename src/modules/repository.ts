import {
  ready,
  randomPasscode,
  SignifyClient,
  Tier,
  CreateIdentiferArgs,
} from "signify-ts";
import {
  IllegalArgumentException,
  IllegalStateException,
} from "@/modules/exception";
import {
  OobiIpexHandler,
  YourResponseValidator,
  MyResponseSender,
  MyChallengeSender,
  OobiIpexState,
  CredentialAccepter,
} from "@/modules/oobi-ipex";
import {
  type KeriaRole,
  AID_NAME,
  KERIA_ROLE,
  QVI_SCHEMA_URL,
  VLEI_REGISTRY_NAME,
} from "@/modules/const";
/**
 * A companion class for the SignifyRepository interface,
 * providing factory methods and more.
 */
export class Signifies {
  private static instances: Map<RepositoryImplType, SignifyRepository> =
    new Map();

  static {
    (async () => {
      await ready();
    })();
  }

  private constructor() {}

  /**
   * Get a SignifyRepository instance.
   *
   * @param type Repository Impl Type
   * @returns SignifyRepository
   * @thows IllegalStateException when masterSecret is not set.
   */
  static getInstance = async (
    type: RepositoryImplType = "default",
  ): Promise<SignifyRepository> => {
    const masterSecret = Signifies.getMasterSecret();
    if (!masterSecret) {
      throw new IllegalStateException("masterSecret is not set.");
    }
    return Signifies.getInstanceWithSecret(masterSecret, type);
  };

  /**
   * Get a SignifyRepository instance with the master secret.
   *
   * @param masterSecret master secret
   * @param type Repository Impl Type
   * @returns SignifyRepository instance
   */
  static getInstanceWithSecret = async (
    masterSecret: string,
    type: RepositoryImplType = "default",
  ): Promise<SignifyRepository> => {
    // TODO: validation code for masterSecret

    Signifies.setMasterSecret(masterSecret);

    if (!Signifies.instances.has(type)) {
      switch (type) {
        case "default": {
          const client = new SignifyClient(
            import.meta.env.VITE_KERIA_BOOT_INTERFACE_URL,
            masterSecret,
            Tier.low,
            import.meta.env.VITE_KERIA_BOOT_INTERFACE_URL,
          );

          // Mapping of oobi state to its handler
          const ipexHandlerMap: Map<OobiIpexState, OobiIpexHandler> = new Map();
          // oobi part
          ipexHandlerMap.set("2_1_challenge_received", new MyResponseSender());
          ipexHandlerMap.set("2_3_response_validated", new MyChallengeSender());
          ipexHandlerMap.set(
            "3_2_response_received",
            new YourResponseValidator(),
          );
          // ipex part
          ipexHandlerMap.set(
            "4_1_credential_received",
            new CredentialAccepter(),
          );

          const defaultInstance = new SignifyRepositoryDefaultImpl(
            client,
            ipexHandlerMap,
          );
          await defaultInstance.connectToKeriaAgent();
          Signifies.instances.set(type, defaultInstance);
          break;
        }
      }
    }

    const repository = Signifies.instances.get(type);
    if (!repository) {
      throw new IllegalStateException("Repository instance is not set.");
    }

    return repository;
  };

  /**
   * Check if a init process is done.
   * @param type Repository Impl Type
   * @returns boolean
   */
  static isInitiationDone = (): boolean => {
    return !!this.getMasterSecret();
  };

  /**
   * Generate a master secret.
   * @returns master secret
   */
  static generateMasterSecret = async (): Promise<string> => {
    return randomPasscode();
  };

  /**
   * Set the master secret.
   *
   *
   * @param masterSecret
   */
  private static setMasterSecret = (masterSecret: string): void => {
    // Note: To hold the master secret even when the browser screen is reloaded, use sessionStorage.
    // If you want to empty the master secret when reloading the screen, change it to store it in memory.

    // Note: ブラウザ画面リロードでもmasterSecretを保持するため、sessionStorageを利用する。
    // リロードでmasterSecretを空にしたい場合は、メモリに保持するように変更する。
    sessionStorage.setItem("masterSecret", masterSecret);
  };

  /**
   * Get the master secret.
   * @returns master secret or null
   */
  private static getMasterSecret = (): string | null => {
    return sessionStorage.getItem("masterSecret");
  };
}

/**
 * The SignifyRepository interface.
 * (Holds business logic. It's like Service interface in the Service pattern, or
 * Repository interface in the UDF Architecture)
 */
export interface SignifyRepository {
  /**
   * Connect to the Keria Agent.
   */
  connectToKeriaAgent(): Promise<void>;

  /**
   * Retrieve AID. If not exists, create it.
   * @returns AID
   */
  createOrRetrieveAid(): Promise<string>;

  /**
   * Create Registry.
   */
  createVcRegistry(registryName?: string): Promise<void>;

  /**
   * Import VC Schema
   */
  importVcSchema(): Promise<void>;

  /**
   * Create Oobi.
   * @returns Oobi
   */
  createOobi(): Promise<string>;

  /**
   * Get Profile.
   */
  getProfile(): Promise<Profile>;

  /**
   * Rotate the key.
   */
  rotateKey(): Promise<void>;

  /**
   * Get Rotation History.
   */
  getRotationHistory(): Promise<RotationHistory[]>;

  /**
   * Get Holders.
   */
  getHolders(): Promise<Contact[]>;

  /**
   * Get Holder.
   *
   * @param pre AID prefix
   */
  getHolder(pre: string): Promise<Contact>;

  /**
   * Add Holder.
   *
   * @param oobi Oobi
   * @param holderName Holder Name
   * @returns holder
   */
  addHolder(oobi: string, holderName: string): Promise<Contact>;

  /**
   * Progress Ipex.
   *
   * @param holder
   */
  progressIpex(holder: Contact): Promise<void>;

  /**
   * This method is for development only.
   */
  inspect(): Promise<void>;
}

/**
 * The default implementation of the SignifyRepository interface.
 * Holds the SignifyClient instance and implements the interface methods.
 */
class SignifyRepositoryDefaultImpl implements SignifyRepository {
  private client: SignifyClient;
  private ipexHandlers: Map<OobiIpexState, OobiIpexHandler> = new Map();

  constructor(
    client: SignifyClient,
    ipexHandlers: Map<OobiIpexState, OobiIpexHandler>,
  ) {
    this.client = client;
    this.ipexHandlers = ipexHandlers;
  }

  /**
   *  Connect to the Keria Agent.
   */
  public async connectToKeriaAgent(): Promise<void> {
    const bootResp = await this.client.boot();
    console.log(`signfy client booted: ${JSON.stringify(bootResp, null, 2)}`);

    await this.client.connect();
    console.log("signify client connected");
  }

  /**
   * Retrieve AID. If not exists, create it.
   * @returns AID
   */
  public async createOrRetrieveAid(): Promise<string> {
    let aid = await this.client.identifiers().get(AID_NAME);
    if (!aid) {
      // Creation of InceptionEvent (AID/KEL generation)
      const inceptionEventArgs: CreateIdentiferArgs = {
        wits: [...import.meta.env.VITE_WITNESS_URLS.split(",")],
      };
      const inceptionEvent = await this.client
        .identifiers()
        .create(AID_NAME, inceptionEventArgs);
      console.log(
        `Inception Event: ${JSON.stringify(inceptionEvent, null, 2)}`,
      );

      // Wait for the asynchronous operation on the Keria Agent to complete.
      // Need this step when a operations's type is CUD.
      const inceptionOp = await inceptionEvent.op();
      await this.client.operations().wait(inceptionOp);
      await this.client.operations().delete(inceptionOp.name);

      const keriaRole: KeriaRole = "agent";
      // Authorize Keria as Agent
      const authorizedAgentResult = await this.client
        .identifiers()
        .addEndRole(AID_NAME, keriaRole, this.client.agent?.pre);
      console.log(
        `Authorized Agent Result: ${JSON.stringify(authorizedAgentResult, null, 2)}`,
      );

      const authzOp = await authorizedAgentResult.op();
      await this.client.operations().wait(authzOp);
      await this.client.operations().delete(authzOp.name);

      aid = await this.client.identifiers().get(AID_NAME);
    }
    return aid.prefix;
  }

  /**
   * Create Oobi.
   * @returns Oobi
   */
  public async createOobi(): Promise<string> {
    const oobi = await this.client.oobis().get(AID_NAME, KERIA_ROLE);
    console.log(JSON.stringify(oobi, null, 2));
    return oobi.oobi[0];
  }

  /**
   * Import VC Schema
   */
  public async importVcSchema(
    schemaUrl: string = QVI_SCHEMA_URL,
  ): Promise<void> {
    const resolveResult = await this.client.oobis().resolve(schemaUrl);
    console.log(
      `Schema OOBI Resolution Result: ${JSON.stringify(resolveResult, null, 2)}`,
    );

    const resolveOp = await resolveResult.op();
    await this.client.operations().wait(resolveOp);
    await this.client.operations().delete(resolveOp.name);
  }

  /**
   * Create Registry.
   *
   * @param registryName Registry Name
   */
  public async createVcRegistry(
    registryName: string = VLEI_REGISTRY_NAME,
  ): Promise<void> {
    const holderAid = await this.client.identifiers().get(AID_NAME);
    const registryCreationResult = await this.client
      .registries()
      .create({ name: holderAid.name, registryName });

    await this.client.operations().wait(registryCreationResult.op);
    await this.client.operations().delete(registryCreationResult.op.name);
  }

  /**
   * Get Profile.
   */
  public async getProfile(): Promise<Profile> {
    const aid = await this.client.identifiers().get(AID_NAME);
    const profile: Profile = {
      // TODO: Important! properties other thant aid should be fetched from the Backend App which
      // does not exist in this project.
      // TODO: 重要！aid以外のプロパティは、このプロジェクトには存在しないバックエンドアプリから取得する必要があります。
      name: "John Doe",
      position: "CTO",
      createdAt: "2024/01/01",
      aid: aid.prefix,
    };
    return profile;
  }

  /**
   * Rotate the key.
   */
  public async rotateKey(): Promise<void> {
    const rotateEvent = await this.client.identifiers().rotate(AID_NAME);
    console.log(JSON.stringify(rotateEvent, null, 2));

    const rotateOp = await rotateEvent.op();
    await this.client.operations().wait(rotateOp);
    await this.client.operations().delete(rotateOp.name);
  }

  /**
   * TODO: Get Rotation History.
   */
  public async getRotationHistory(): Promise<RotationHistory[]> {
    const agent = this.client.agent;
    if (agent) {
      const kel = await this.client.keyEvents().get(agent.pre);
      // TODO: ここを確認して、RotationHistoryの型を定義して変換してreturnする。
      // TODO: Check here and define the RotationHistory type and convert it to return.
      console.log(`KEL: ${JSON.stringify(kel, null, 2)}`);

      // Return mockup data for now.
      return [
        {
          publicKey: "publicKey1",
          createdDate: "2024/01/01",
        },
        {
          publicKey: "publicKey2",
          createdDate: "2024/01/02",
        },
        {
          publicKey: "publicKey3",
          createdDate: "2024/01/03",
        },
      ];
    } else {
      throw new IllegalStateException("Agent is not set.");
    }
  }

  /**
   * Get Holders.
   */
  public async getHolders(): Promise<Contact[]> {
    // TODO: Anyで帰ってきてしまっている。ログから型を特定する。
    // とりあえず仮定の型でモックデータを返す。

    const holders = await this.client.contacts().list();
    console.log(`Holders: ${JSON.stringify(holders, null, 2)}`);

    // TODO: Important!! ここでStatusの設定を行う。(1)

    // TODO: **Notification**の取得
    // (1)-a.Your Challengeの取得を行う。
    //    Statusの設定の中で、Challenge受信のNotification情報を取得して、存在すればStatusに2_1_challenge_receivedを設定する。
    //    Contatに対しNotificationを設定し画面に返し、ボタンが活性化される。(Responseの送信へ)
    // 参考: github.com/WebOfTrust/signify-ts/blob/cddb00713ce7b09b3f18acdaae559703759369bc/examples/integration-scripts/utils/test-util.ts#L479

    // (1)-b. My ResponseのValdiate状態を取得する。
    //     Statusの設定の中で、ResponseのNotification情報を取得して、存在すればStatusに2_3_response_validatedを設定する。
    //     Contatに対しNotificationを設定し画面に返し、ボタンが活性化される。(Challengeの送信へ)

    // (1)-c. Your Responseの取得を行う。
    //     Statusの設定の中で、ResponseのNotification情報を取得して、存在すればStatusにresponse_receivedを設定する。
    //     Contatに対しNotificationを設定し画面に返し、ボタンが活性化される。(Validateへ)

    // (1)-d. Credentialの取得を行う。
    //   Statusの設定の中で、CredentialのNotification情報を取得して、存在すればStatusに4_1_credential_receivedを設定する。
    //   その続きの諸路として、ContactをprogressIpex(..)に渡す。
    // 下記は、参考コード

    // const holderNotifications = await waitForNotifications(
    //   holderClient,
    //   "/exn/ipex/grant",
    // );
    // const grantNotification = holderNotifications[0]; // should only have one notification right now

    return [
      {
        name: "John Doe",
        pre: "pre1",
        state: "2_1_challenge_received",
        challenge: ["challenge1", "challenge2"],
      },
      {
        name: "Jane Doe",
        pre: "pre2",
        state: "2_1_challenge_received",
        challenge: ["challenge1", "challenge2"],
      },
    ];
  }

  /**
   * Get Holder.
   *
   * @param pre AID prefix
   */
  public async getHolder(pre: string): Promise<Contact> {
    // TODO: Anyで帰ってきてしまっている。ログから型を特定する。
    // とりあえず仮定の型でモックデータを返す。
    if (!pre) {
      throw new IllegalStateException("pre is not set.");
    }

    const holder = await this.client.contacts().get(pre);
    console.log(`Holder: ${JSON.stringify(holder, null, 2)}`);

    // TODO: Important!! getHolders(..)同様に、ここでStatusの設定を行う。

    return {
      name: "John Doe",
      pre: "pre1",
      state: "2_1_challenge_received",
      challenge: ["challenge1", "challenge2"],
    };
  }

  /**
   * add Holder.
   *
   * @param oobi Oobi
   * @param holderName Holder Name
   * @returns holder
   */
  public async addHolder(oobi: string, holderName: string): Promise<Contact> {
    if (!oobi || !holderName) {
      throw new IllegalArgumentException("oobi or holderName is not set.");
    }

    const resolveResult = await this.client.oobis().resolve(oobi, holderName);
    console.log(
      `Oobi Resolution Result: ${JSON.stringify(resolveResult, null, 2)}`,
    );

    const resolveOp = await resolveResult.op();
    await this.client.operations().wait(resolveOp);
    await this.client.operations().delete(resolveOp.name);

    return {
      // TODO: oobiから取得できるかもしれない。確認して修正する。
      pre: resolveResult.pre,
      state: "1_init",
      name: holderName,
      challenge: ["challenge1", "challenge2"],
    };
  }

  /**
   * Progress Ipex.
   *
   * @param holder
   */
  public async progressIpex(holder: Contact): Promise<void> {
    const ipexHandler = this.ipexHandlers.get(holder.state);
    if (!ipexHandler) {
      throw new IllegalStateException(`Ipex State is invalid. ${holder.state}`);
    }
    await ipexHandler.progress(this.client, holder);
  }

  /**
   * Logging useful information of the Signify Client.
   * 有益そうなSignify Clientの情報をロギングする。
   * This method is for development only.
   */
  public async inspect(): Promise<void> {
    const states = await this.client.state();
    console.log(`states: ${JSON.stringify(states, null, 2)}`);

    const keyStates = this.client.keyStates();
    console.log(`keyStates: ${JSON.stringify(keyStates, null, 2)}`);

    const operation = this.client.operations();
    console.log(`operation: ${JSON.stringify(operation, null, 2)}`);

    const notification = this.client.notifications();
    console.log(`notification: ${JSON.stringify(notification, null, 2)}`);

    const exchanges = this.client.exchanges();
    console.log(`exchanges: ${JSON.stringify(exchanges, null, 2)}`);

    const registries = this.client.registries();
    console.log(`registries: ${JSON.stringify(registries, null, 2)}`);
  }
}

export type RepositoryImplType = "default";
export type Profile = {
  name: string;
  position: string;
  createdAt: string;
  aid: string;
};

export type RotationHistory = {
  publicKey: string;
  createdDate: string;
};

// TODO: 仮の型定義。実際のSDK戻り値を確認して修正する。
export type Contact = {
  name: string; // lei
  pre: string; // prefix
  state: OobiIpexState;
  challenge: string[];
  notification?: AdmitNotification;
};

export type Notification = {
  i: string;
  dt: string;
  r: boolean;
  a: { r: string; d?: string; m?: string };
};

export type AdmitNotification = Notification;
