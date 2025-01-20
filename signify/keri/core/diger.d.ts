import { Matter, MatterArgs } from "./matter";
/**
 * @description : Diger is subset of Matter and is used to verify the digest of serialization
 * It uses  .raw : as digest
 * .code as digest algorithm
 *
 */
export declare class Diger extends Matter {
  private readonly _verify;
  constructor(
    { raw, code, qb64, qb64b, qb2 }: MatterArgs,
    ser?: Uint8Array | null,
  );
  /**
     *
     * @param {Uint8Array} ser  serialization bytes
     * @description  This method will return true if digest of bytes serialization ser matches .raw
     * using .raw as reference digest for ._verify digest algorithm determined
     by .code
     */
  verify(ser: Uint8Array): boolean;
  compare(ser: Uint8Array, dig?: any, diger?: Diger | null): boolean;
  blake3_256(ser: Uint8Array, dig: any): boolean;
}
