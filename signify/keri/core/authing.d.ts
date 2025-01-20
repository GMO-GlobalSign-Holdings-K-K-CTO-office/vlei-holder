import { Signer } from "./signer";
import { Verfer } from "./verfer";
export declare class Authenticater {
  static DefaultFields: string[];
  private _verfer;
  private readonly _csig;
  constructor(csig: Signer, verfer: Verfer);
  verify(headers: Headers, method: string, path: string): boolean;
  sign(
    headers: Headers,
    method: string,
    path: string,
    fields?: Array<string>,
  ): Headers;
}
