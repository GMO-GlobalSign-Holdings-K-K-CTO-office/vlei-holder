/// <reference types="node" />
import { Matter, MatterArgs } from "./matter";
import { Dict, Serials } from "./core";
import { Buffer } from "buffer";
export declare enum Ids {
  d = "d",
}
declare class Digestage {
  klas: any;
  size: number | undefined;
  length: number | undefined;
  constructor(klas: any, size?: number, length?: number);
}
export declare class Saider extends Matter {
  static Digests: Map<string, Digestage>;
  constructor(
    { raw, code, qb64b, qb64, qb2 }: MatterArgs,
    sad?: Dict<any>,
    kind?: Serials,
    label?: string,
  );
  static _derive_blake3_256(
    ser: Uint8Array,
    _digest_size: number,
    _length: number,
  ): Buffer;
  private static _derive;
  derive(
    sad: Dict<any>,
    code: string,
    kind: Serials | undefined,
    label: string,
  ): [Uint8Array, Dict<any>];
  verify(
    sad: Dict<any>,
    prefixed?: boolean,
    versioned?: boolean,
    kind?: Serials,
    label?: string,
  ): boolean;
  private static _serialze;
  static saidify(
    sad: Dict<any>,
    code?: string,
    kind?: Serials,
    label?: string,
  ): [Saider, Dict<any>];
}
export {};
