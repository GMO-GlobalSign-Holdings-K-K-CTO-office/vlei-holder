export {};
import { Matter, MatterArgs } from "./matter";
/**
 * @description  Verfer :sublclass of Matter,helps to verify signature of serialization
 *  using .raw as verifier key and .code as signature cypher suite
 */
export declare class Verfer extends Matter {
  private readonly _verify;
  constructor({ raw, code, qb64, qb64b, qb2 }: MatterArgs);
  verify(sig: any, ser: any): boolean;
  _ed25519(sig: any, ser: any, key: any): boolean;
  _secp256r1(sig: any, ser: any, key: any): any;
}
