export declare class Codex {
  has(prop: string): boolean;
}
export declare class MatterCodex extends Codex {
  Ed25519_Seed: string;
  Ed25519N: string;
  X25519: string;
  Ed25519: string;
  Blake3_256: string;
  SHA3_256: string;
  SHA2_256: string;
  ECDSA_256k1_Seed: string;
  X25519_Private: string;
  X25519_Cipher_Seed: string;
  ECDSA_256r1_Seed: string;
  Salt_128: string;
  Ed25519_Sig: string;
  ECDSA_256k1_Sig: string;
  ECDSA_256r1_Sig: string;
  StrB64_L0: string;
  StrB64_L1: string;
  StrB64_L2: string;
  ECDSA_256k1N: string;
  ECDSA_256k1: string;
  X25519_Cipher_Salt: string;
  ECDSA_256r1N: string;
  ECDSA_256r1: string;
  StrB64_Big_L0: string;
  StrB64_Big_L1: string;
  StrB64_Big_L2: string;
}
export declare const MtrDex: MatterCodex;
export declare class NonTransCodex extends Codex {
  Ed25519N: string;
  ECDSA_256k1N: string;
  Ed448N: string;
  ECDSA_256r1N: string;
}
export declare const NonTransDex: NonTransCodex;
export declare class DigiCodex extends Codex {
  Blake3_256: string;
  Blake2b_256: string;
  Blake2s_256: string;
  SHA3_256: string;
  SHA2_256: string;
  Blake3_512: string;
  Blake2b_512: string;
  SHA3_512: string;
  SHA2_512: string;
}
export declare const DigiDex: DigiCodex;
export declare class NumCodex extends Codex {
  Short: string;
  Long: string;
  Big: string;
  Huge: string;
}
export declare const NumDex: NumCodex;
export declare class BexCodex extends Codex {
  StrB64_L0: string;
  StrB64_L1: string;
  StrB64_L2: string;
  StrB64_Big_L0: string;
  StrB64_Big_L1: string;
  StrB64_Big_L2: string;
}
export declare const BexDex: BexCodex;
declare class SmallVarRawSizeCodex extends Codex {
  Lead0: string;
  Lead1: string;
  Lead2: string;
}
export declare const SmallVrzDex: SmallVarRawSizeCodex;
declare class LargeVarRawSizeCodex extends Codex {
  Lead0_Big: string;
  Lead1_Big: string;
  Lead2_Big: string;
}
export declare const LargeVrzDex: LargeVarRawSizeCodex;
export declare class Sizage {
  hs: number;
  ss: number;
  ls?: number;
  fs?: number;
  constructor(hs: number, ss: number, fs?: number, ls?: number);
}
export interface MatterArgs {
  raw?: Uint8Array | undefined;
  code?: string;
  qb64b?: Uint8Array | undefined;
  qb64?: string;
  qb2?: Uint8Array | undefined;
  rize?: number;
}
export declare class Matter {
  static Sizes: Map<string, Sizage>;
  static Hards: Map<string, number>;
  private _code;
  private _size;
  private _raw;
  constructor({ raw, code, qb64b, qb64, qb2, rize }: MatterArgs);
  get code(): string;
  get size(): number;
  get raw(): Uint8Array;
  get qb64(): string;
  get qb64b(): Uint8Array;
  get transferable(): boolean;
  get digestive(): boolean;
  static _rawSize(code: string): number;
  static _leadSize(code: string): number | undefined;
  get both(): string;
  private _infil;
  private _exfil;
  private _bexfil;
}
export {};
