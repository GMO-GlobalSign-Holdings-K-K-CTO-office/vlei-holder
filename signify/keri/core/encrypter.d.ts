import { Matter, MatterArgs } from "./matter";
import { Cipher } from "./cipher";
export declare class Encrypter extends Matter {
  private _encrypt;
  constructor(
    { raw, code, qb64, qb64b, qb2 }: MatterArgs,
    verkey?: Uint8Array | null,
  );
  verifySeed(seed: Uint8Array): boolean;
  encrypt(ser?: Uint8Array | null, matter?: Matter | null): any;
  _x25519(ser: Uint8Array, pubkey: Uint8Array, code: string): Cipher;
}
