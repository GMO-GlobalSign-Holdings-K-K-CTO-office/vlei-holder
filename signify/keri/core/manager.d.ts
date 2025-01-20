import { Encrypter } from "./encrypter";
import { Decrypter } from "./decrypter";
import { Salter, Tier } from "./salter";
import { Signer } from "./signer";
import { Verfer } from "./verfer";
import { Diger } from "./diger";
import { Cigar } from "./cigar";
import { Siger } from "./siger";
export declare enum Algos {
  randy = "randy",
  salty = "salty",
  group = "group",
  extern = "extern",
}
declare class PubLot {
  pubs: Array<string>;
  ridx: number;
  kidx: number;
  dt: string;
}
declare class PreSit {
  old: PubLot;
  new: PubLot;
  nxt: PubLot;
}
declare class PrePrm {
  pidx: number;
  algo: Algos;
  salt: string;
  stem: string;
  tier: string;
}
declare class PubSet {
  pubs: Array<string>;
}
declare class PubPath {
  path: string;
  code: string;
  tier: string;
  temp: boolean;
}
declare class Keys {
  private readonly _signers;
  private readonly _paths?;
  constructor(signers: Array<Signer>, paths?: Array<string>);
  get paths(): Array<string> | undefined;
  get signers(): Array<Signer>;
}
export interface Creator {
  create(
    codes: Array<string> | undefined,
    count: number,
    code: string,
    transferable: boolean,
    pidx: number,
    ridx: number,
    kidx: number,
    temp: boolean,
  ): Keys;
  salt: string;
  stem: string;
  tier: Tier;
}
export declare class RandyCreator implements Creator {
  create(
    codes?: Array<string> | undefined,
    count?: number,
    code?: string,
    transferable?: boolean,
  ): Keys;
  get salt(): string;
  get stem(): string;
  get tier(): Tier;
}
export declare class SaltyCreator implements Creator {
  salter: Salter;
  private readonly _stem;
  constructor(
    salt?: string | undefined,
    tier?: Tier | undefined,
    stem?: string | undefined,
  );
  get salt(): string;
  get stem(): string;
  get tier(): Tier;
  create(
    codes?: Array<string> | undefined,
    count?: number,
    code?: string,
    transferable?: boolean,
    pidx?: number,
    ridx?: number,
    kidx?: number,
    temp?: boolean,
  ): Keys;
}
export declare class Creatory {
  private readonly _make;
  constructor(algo?: Algos);
  make(...args: any[]): Creator;
  _makeRandy(): Creator;
  _makeSalty(...args: any[]): Creator;
}
export declare function openManager(passcode: string, salt?: string): Manager;
export interface ManagerArgs {
  ks?: KeyStore | undefined;
  seed?: string | undefined;
  aeid?: string | undefined;
  pidx?: number | undefined;
  algo?: Algos | undefined;
  salter?: Salter | undefined;
  tier?: string | undefined;
}
export interface ManagerInceptArgs {
  icodes?: any | undefined;
  icount?: number;
  icode?: string;
  ncodes?: any | undefined;
  ncount?: number;
  ncode?: string;
  dcode?: string;
  algo?: Algos | undefined;
  salt?: string | undefined;
  stem?: string | undefined;
  tier?: string | undefined;
  rooted?: boolean;
  transferable?: boolean;
  temp?: boolean;
}
interface RotateArgs {
  pre: string;
  ncodes?: any | undefined;
  ncount?: number;
  ncode?: string;
  dcode?: string;
  transferable?: boolean;
  temp?: boolean;
  erase?: boolean;
}
interface SignArgs {
  ser: Uint8Array;
  pubs?: Array<string> | undefined;
  verfers?: Array<Verfer> | undefined;
  indexed?: boolean;
  indices?: Array<number> | undefined;
  ondices?: Array<number> | undefined;
}
export declare class Manager {
  private _seed?;
  private _salt?;
  private _encrypter;
  private _decrypter;
  private readonly _ks;
  constructor({ ks, seed, aeid, pidx, algo, salter, tier }: ManagerArgs);
  get ks(): KeyStore;
  get encrypter(): Encrypter | undefined;
  get decrypter(): Decrypter | undefined;
  get seed(): string | undefined;
  get aeid(): string | undefined;
  get pidx(): number | undefined;
  set pidx(pidx: number | undefined);
  get salt(): string | undefined;
  set salt(salt: string | undefined);
  get tier(): string | undefined;
  set tier(tier: string | undefined);
  get algo(): Algos | undefined;
  set algo(algo: Algos | undefined);
  private updateAeid;
  incept({
    icodes,
    icount,
    icode,
    ncodes,
    ncount,
    ncode,
    dcode,
    algo,
    salt,
    stem,
    tier,
    rooted,
    transferable,
    temp,
  }: ManagerInceptArgs): [Array<Verfer>, Array<Diger>];
  move(old: string, gnu: string): void;
  rotate({
    pre,
    ncodes,
    ncount,
    ncode,
    dcode,
    transferable,
    temp,
    erase,
  }: RotateArgs): [Array<Verfer>, Array<Diger>];
  sign({
    ser,
    pubs,
    verfers,
    indexed,
    indices,
    ondices,
  }: SignArgs): Siger[] | Cigar[];
}
export declare function riKey(pre: string, ridx: number): string;
export interface KeyStore {
  getGbls(key: string): string | undefined;
  pinGbls(key: string, val: string): void;
  prmsElements(): Array<[string, PrePrm]>;
  getPrms(keys: string): PrePrm | undefined;
  pinPrms(keys: string, data: PrePrm): void;
  putPrms(keys: string, data: PrePrm): boolean;
  remPrms(keys: string): boolean;
  prisElements(decrypter: Decrypter): Array<[string, Signer]>;
  getPris(keys: string, decrypter: Decrypter): Signer | undefined;
  pinPris(keys: string, data: Signer, encrypter: Encrypter): void;
  putPris(pubKey: string, signer: Signer, encrypter: Encrypter): boolean;
  remPris(pubKey: string): void;
  getPths(pubKey: string): PubPath | undefined;
  putPths(pubKey: string, val: PubPath): boolean;
  pinPths(pubKey: string, val: PubPath): boolean;
  getPres(pre: string): Uint8Array | undefined;
  putPres(pre: string, val: Uint8Array): boolean;
  pinPres(pre: string, val: Uint8Array): boolean;
  getSits(keys: string): PreSit | undefined;
  putSits(pre: string, val: PreSit): boolean;
  pinSits(pre: string, val: PreSit): boolean;
  remSits(keys: string): boolean;
  getPubs(keys: string): PubSet | undefined;
  putPubs(keys: string, data: PubSet): boolean;
}
export {};
