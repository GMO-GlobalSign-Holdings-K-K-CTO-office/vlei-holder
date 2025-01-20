import { Salter } from "./salter";
import { Algos } from "./manager";
import { Tier } from "./salter";
import { Signer } from "./signer";
import { HabState, State } from "./state";
/** External module definition */
export interface ExternalModuleType {
  new (pidx: number, args: KeeperParams): Keeper;
}
export interface ExternalModule {
  type: string;
  name: string;
  module: ExternalModuleType;
}
export type KeeperResult = [string[], string[]];
export type SignResult = string[];
export interface KeeperParams {
  [key: string]: unknown;
}
export interface SaltyParams extends KeeperParams {
  pidx: number;
  kidx: number;
  tier: Tier;
  transferable: boolean;
  stem: string | undefined;
  icodes: string[] | undefined;
  ncodes: string[] | undefined;
  dcode: string | undefined;
  sxlt: string | undefined;
}
export interface RandyParams extends KeeperParams {
  nxts?: string[];
  prxs?: string[];
  transferable: boolean;
}
export interface GroupParams extends KeeperParams {
  mhab: HabState;
}
export interface Keeper<T extends KeeperParams = KeeperParams> {
  algo: Algos;
  signers: Signer[];
  params(): T;
  incept(transferable: boolean): Promise<KeeperResult>;
  rotate(
    ncodes: string[],
    transferable: boolean,
    states?: State[],
    rstates?: State[],
  ): Promise<KeeperResult>;
  sign(
    ser: Uint8Array,
    indexed?: boolean,
    indices?: number[],
    ondices?: number[],
  ): Promise<SignResult>;
}
export declare class KeyManager {
  private salter;
  private modules;
  constructor(salter: Salter, externalModules?: ExternalModule[]);
  new(
    algo: Algos,
    pidx: number,
    kargs: any,
  ): Keeper<KeeperParams> | GroupKeeper;
  get(aid: HabState): Keeper;
}
export declare class SaltyKeeper implements Keeper {
  private aeid;
  private encrypter;
  private decrypter;
  private salter;
  private pidx;
  private kidx;
  private tier;
  private transferable;
  private stem;
  private code;
  private count;
  private icodes;
  private ncode;
  private ncount;
  private ncodes;
  private dcode;
  private sxlt;
  private bran;
  private creator;
  algo: Algos;
  signers: Signer[];
  constructor(
    salter: Salter,
    pidx: number,
    kidx?: number,
    tier?: Tier,
    transferable?: boolean,
    stem?: string | undefined,
    code?: string,
    count?: number,
    icodes?: string[] | undefined,
    ncode?: string,
    ncount?: number,
    ncodes?: string[] | undefined,
    dcode?: string,
    bran?: string | undefined,
    sxlt?: string | undefined,
  );
  params(): SaltyParams;
  incept(transferable: boolean): Promise<KeeperResult>;
  rotate(
    ncodes: string[],
    transferable: boolean,
  ): Promise<[string[], string[]]>;
  sign(
    ser: Uint8Array,
    indexed?: boolean,
    indices?: number[] | undefined,
    ondices?: number[] | undefined,
  ): Promise<SignResult>;
}
export declare class RandyKeeper implements Keeper {
  private salter;
  private code;
  private count;
  private icodes;
  private transferable;
  private ncount;
  private ncodes;
  private ncode;
  private dcode;
  private prxs;
  private nxts;
  private aeid;
  private encrypter;
  private decrypter;
  private creator;
  algo: Algos;
  signers: Signer[];
  constructor(
    salter: Salter,
    code: string | undefined,
    count: number | undefined,
    icodes: string[] | undefined,
    transferable: boolean | undefined,
    ncode: string | undefined,
    ncount: number | undefined,
    ncodes: string[],
    dcode?: string,
    prxs?: string[] | undefined,
    nxts?: string[] | undefined,
  );
  params(): RandyParams;
  incept(transferable: boolean): Promise<KeeperResult>;
  rotate(ncodes: string[], transferable: boolean): Promise<KeeperResult>;
  sign(
    ser: Uint8Array,
    indexed?: boolean,
    indices?: number[] | undefined,
    ondices?: number[] | undefined,
  ): Promise<SignResult>;
}
export declare class GroupKeeper implements Keeper {
  private manager;
  private mhab;
  private gkeys;
  private gdigs;
  algo: Algos;
  signers: Signer[];
  constructor(
    manager: KeyManager,
    mhab: HabState,
    states?: State[] | undefined,
    rstates?: State[] | undefined,
    keys?: string[],
    ndigs?: string[],
  );
  incept(): Promise<KeeperResult>;
  rotate(
    _ncodes: string[],
    _transferable: boolean,
    states: State[],
    rstates: State[],
  ): Promise<KeeperResult>;
  sign(ser: Uint8Array, indexed?: boolean): Promise<SignResult>;
  params(): {
    mhab: HabState;
    keys: string[];
    ndigs: string[];
  };
}
