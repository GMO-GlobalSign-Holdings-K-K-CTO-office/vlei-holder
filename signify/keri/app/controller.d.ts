import { Tier } from "../core/salter";
import { Serder } from "../core/serder";
import { Verfer } from "../core/verfer";
import { Encrypter } from "../core/encrypter";
import { Decrypter } from "../core/decrypter";
/**
 * Agent is a custodial entity that can be used in conjuntion with a local Client to establish the
 * KERI "signing at the edge" semantic
 */
export declare class Agent {
  pre: string;
  anchor: string;
  verfer: Verfer | null;
  state: any | null;
  sn: number | undefined;
  said: string | undefined;
  constructor(agent: any);
  private parse;
  private event;
}
/**
 * Controller is responsible for managing signing keys for the client and agent.  The client
 * signing key represents the Account for the client on the agent
 */
export declare class Controller {
  private bran;
  stem: string;
  tier: Tier;
  ridx: number;
  salter: any;
  signer: any;
  private nsigner;
  serder: Serder;
  private keys;
  ndigs: string[];
  constructor(bran: string, tier: Tier, ridx?: number, state?: any | null);
  approveDelegation(_agent: Agent): any[];
  get pre(): string;
  get event(): any[];
  get verfers(): [];
  derive(state: any): Serder;
  rotate(
    bran: string,
    aids: Array<any>,
  ): {
    rot: import("../core/core").Dict<any>;
    sigs: any[];
    sxlt: any;
    keys: Record<any, any>;
  };
  recrypt(enc: string, decrypter: Decrypter, encrypter: Encrypter): any;
}
