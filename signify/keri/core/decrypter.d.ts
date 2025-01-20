import { Matter, MatterArgs } from "./matter";
import { Signer } from "./signer";
import { Cipher } from "./cipher";
import { Salter } from "./salter";
export declare class Decrypter extends Matter {
  private readonly _decrypt;
  constructor(
    { raw, code, qb64, qb64b, qb2 }: MatterArgs,
    seed?: Uint8Array | undefined,
  );
  decrypt(
    ser?: Uint8Array | null,
    cipher?: Cipher | null,
    transferable?: boolean,
  ): any;
  _x25519(
    cipher: Cipher,
    prikey: Uint8Array,
    transferable?: boolean,
  ): Signer | Salter;
}
