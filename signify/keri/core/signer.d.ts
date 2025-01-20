export {};
import { Matter } from "./matter";
import { Verfer } from "./verfer";
import { Cigar } from "./cigar";
import { Siger } from "./siger";
/**
 * @description Signer is Matter subclass with method to create signature of serialization
 * It will use .raw as signing (private) key seed
 * .code as cipher suite for signing and new property .verfer whose property
 *  .raw is public key for signing.
 *  If not provided .verfer is generated from private key seed using .code
 as cipher suite for creating key-pair.
 */
interface SignerArgs {
  raw?: Uint8Array | undefined;
  code?: string;
  qb64b?: Uint8Array | undefined;
  qb64?: string;
  qb2?: Uint8Array | undefined;
  transferable?: boolean;
}
export declare class Signer extends Matter {
  private readonly _sign;
  private readonly _verfer;
  constructor({ raw, code, qb64, qb64b, qb2, transferable }: SignerArgs);
  /**
     * @description Property verfer:
     Returns Verfer instance
     Assumes ._verfer is correctly assigned
     */
  get verfer(): Verfer;
  sign(
    ser: Uint8Array,
    index?: number | null,
    only?: boolean,
    ondex?: number | undefined,
  ): Siger | Cigar;
  _ed25519(
    ser: Uint8Array,
    seed: Uint8Array,
    verfer: Verfer,
    index: number | null,
    only: boolean | undefined,
    ondex: number | undefined,
  ): Cigar | Siger;
}
