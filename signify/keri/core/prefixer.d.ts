import { Matter, MatterArgs } from "./matter";
import { Dict } from "./core";
export declare class Prefixer extends Matter {
  private readonly _derive;
  private readonly _verify;
  constructor({ raw, code, qb64b, qb64, qb2 }: MatterArgs, ked?: Dict<any>);
  derive(ked: Dict<any>): [Uint8Array, string];
  verify(ked: Dict<any>, prefixed?: boolean): boolean;
  static _derive_ed25519N(ked: Dict<any>): [Uint8Array, string];
  static _derive_ed25519(ked: Dict<any>): [Uint8Array, string];
  static _derive_blake3_256(ked: Dict<any>): [Uint8Array, string];
  _verify_ed25519N(ked: Dict<any>, pre: string, prefixed?: boolean): boolean;
  _verify_ed25519(ked: Dict<any>, pre: string, prefixed?: boolean): boolean;
  _verify_blake3_256(ked: Dict<any>, pre: string, prefixed?: boolean): boolean;
}
