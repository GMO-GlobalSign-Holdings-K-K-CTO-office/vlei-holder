export declare class IndexerCodex {
  Ed25519_Sig: string;
  Ed25519_Crt_Sig: string;
  ECDSA_256k1_Sig: string;
  ECDSA_256k1_Crt_Sig: string;
  ECDSA_256r1_Sig: string;
  ECDSA_256r1_Crt_Sig: string;
  Ed448_Sig: string;
  Ed448_Crt_Sig: string;
  Ed25519_Big_Sig: string;
  Ed25519_Big_Crt_Sig: string;
  ECDSA_256k1_Big_Sig: string;
  ECDSA_256k1_Big_Crt_Sig: string;
  ECDSA_256r1_Big_Sig: string;
  ECDSA_256r1_Big_Crt_Sig: string;
  Ed448_Big_Sig: string;
  Ed448_Big_Crt_Sig: string;
}
export declare const IdrDex: IndexerCodex;
export declare class IndexedSigCodex {
  Ed25519_Sig: string;
  Ed25519_Crt_Sig: string;
  ECDSA_256k1_Sig: string;
  ECDSA_256k1_Crt_Sig: string;
  ECDSA_256r1_Sig: string;
  ECDSA_256r1_Crt_Sig: string;
  Ed448_Sig: string;
  Ed448_Crt_Sig: string;
  Ed25519_Big_Sig: string;
  Ed25519_Big_Crt_Sig: string;
  ECDSA_256k1_Big_Sig: string;
  ECDSA_256k1_Big_Crt_Sig: string;
  ECDSA_256r1_Big_Sig: string;
  ECDSA_256r1_Big_Crt_Sig: string;
  Ed448_Big_Sig: string;
  Ed448_Big_Crt_Sig: string;
  has(prop: string): boolean;
}
export declare const IdxSigDex: IndexedSigCodex;
export declare class IndexedCurrentSigCodex {
  Ed25519_Crt_Sig: string;
  ECDSA_256k1_Crt_Sig: string;
  ECDSA_256r1_Crt_Sig: string;
  Ed448_Crt_Sig: string;
  Ed25519_Big_Crt_Sig: string;
  ECDSA_256k1_Big_Crt_Sig: string;
  ECDSA_256r1_Big_Crt_Sig: string;
  Ed448_Big_Crt_Sig: string;
  has(prop: string): boolean;
}
export declare const IdxCrtSigDex: IndexedCurrentSigCodex;
export declare class IndexedBothSigCodex {
  Ed25519_Sig: string;
  ECDSA_256k1_Sig: string;
  Ed448_Sig: string;
  Ed25519_Big_Sig: string;
  ECDSA_256k1_Big_Sig: string;
  Ed448_Big_Sig: string;
  has(prop: string): boolean;
}
export declare const IdxBthSigDex: IndexedBothSigCodex;
export declare class Xizage {
  hs: number;
  ss: number;
  os: number;
  fs?: number;
  ls: number;
  constructor(hs: number, ss: number, os: number, fs?: number, ls?: number);
}
export interface IndexerArgs {
  raw?: Uint8Array | undefined;
  code?: string | undefined;
  index?: number;
  ondex?: number;
  qb64b?: Uint8Array | undefined;
  qb64?: string | undefined;
  qb2?: Uint8Array | undefined;
}
export declare class Indexer {
  Codex: IndexerCodex;
  static Hards: Map<string, number>;
  static Sizes: Map<string, Xizage>;
  private _code;
  private _index;
  private _ondex;
  private _raw;
  constructor({ raw, code, index, ondex, qb64b, qb64, qb2 }: IndexerArgs);
  private _bexfil;
  static _rawSize(code: string): number;
  get code(): string;
  get raw(): Uint8Array;
  get index(): number;
  get ondex(): number | undefined;
  get qb64(): string;
  get qb64b(): Uint8Array;
  private _infil;
  _exfil(qb64: string): void;
}
