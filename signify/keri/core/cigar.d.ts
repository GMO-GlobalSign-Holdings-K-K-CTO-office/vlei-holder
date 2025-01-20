import { Verfer } from "./verfer";
import { Matter, MatterArgs } from "./matter";
export declare class Cigar extends Matter {
  private _verfer;
  constructor({ raw, code, qb64, qb64b, qb2 }: MatterArgs, verfer?: Verfer);
  get verfer(): Verfer | undefined;
  set verfer(verfer: Verfer | undefined);
}
