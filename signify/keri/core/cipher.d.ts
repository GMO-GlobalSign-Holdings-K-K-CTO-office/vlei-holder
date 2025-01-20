import { Matter, MatterArgs } from "./matter";
export declare class Cipher extends Matter {
  constructor({ raw, code, qb64, qb64b, qb2 }: MatterArgs);
  decrypt(prikey?: Uint8Array | undefined, seed?: Uint8Array | undefined): any;
}
