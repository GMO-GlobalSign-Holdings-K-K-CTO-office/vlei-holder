import { Signer } from "./signer";
import { Cigar } from "./cigar";
import { Siger } from "./siger";
export declare const HEADER_SIG_INPUT: string;
export declare const HEADER_SIG_TIME: string;
export declare function normalize(header: string): string;
export interface SiginputArgs {
  name: string;
  method: string;
  path: string;
  headers: Headers;
  fields: Array<string>;
  expires?: number;
  nonce?: string;
  alg?: string;
  keyid?: string;
  context?: string;
}
export declare function siginput(
  signer: Signer,
  {
    name,
    method,
    path,
    headers,
    fields,
    expires,
    nonce,
    alg,
    keyid,
    context,
  }: SiginputArgs,
): [Map<string, string>, Siger | Cigar];
export declare class Unqualified {
  private readonly _raw;
  constructor(raw: Uint8Array);
  get qb64(): string;
  get qb64b(): Uint8Array;
}
export declare class Inputage {
  name: any;
  fields: any;
  created: any;
  expires: any;
  nonce: any;
  alg: any;
  keyid: any;
  context: any;
}
export declare function desiginput(value: string): Array<Inputage>;
/** Parse start, end and total from HTTP Content-Range header value
 * @param {string|null} header - HTTP Range header value
 * @param {string} typ - type of range, e.g. "aids"
 * @returns {start: number, end: number, total: number} - object with start, end and total properties
 */
export declare function parseRangeHeaders(
  header: string | null,
  typ: string,
): {
  start: number;
  end: number;
  total: number;
};
