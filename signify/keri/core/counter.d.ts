import { Codex, Sizage } from "./matter";
export interface CounterArgs {
  code?: string;
  count?: number;
  countB64?: string;
  qb64b?: Uint8Array;
  qb64?: string;
  qb2?: Uint8Array;
  strip?: boolean;
}
export declare class CounterCodex extends Codex {
  ControllerIdxSigs: string;
  WitnessIdxSigs: string;
  NonTransReceiptCouples: string;
  TransReceiptQuadruples: string;
  FirstSeenReplayCouples: string;
  TransIdxSigGroups: string;
  SealSourceCouples: string;
  TransLastIdxSigGroups: string;
  SealSourceTriples: string;
  SadPathSig: string;
  SadPathSigGroup: string;
  PathedMaterialQuadlets: string;
  AttachedMaterialQuadlets: string;
  BigAttachedMaterialQuadlets: string;
  KERIProtocolStack: string;
}
export declare const CtrDex: CounterCodex;
export declare class Counter {
  static Sizes: Map<string, Sizage>;
  static Hards: Map<string, number>;
  private _code;
  private _count;
  constructor({ code, count, countB64, qb64b, qb64, qb2 }: CounterArgs);
  get code(): string;
  get count(): number;
  get qb64(): string;
  get qb64b(): Uint8Array;
  countToB64(l?: number): string;
  static semVerToB64(
    version?: string,
    major?: number,
    minor?: number,
    patch?: number,
  ): string;
  private _infil;
  private _exfil;
}
