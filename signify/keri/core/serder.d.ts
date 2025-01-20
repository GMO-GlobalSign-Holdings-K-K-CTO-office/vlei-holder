import { Dict, Ident, Serials, Version } from "./core";
import { Verfer } from "./verfer";
import { Diger } from "./diger";
import { CesrNumber } from "./number";
export declare class Serder {
  private _kind;
  private _raw;
  private _ked;
  private _ident;
  private _size;
  private _version;
  private readonly _code;
  constructor(ked: Dict<any>, kind?: Serials, code?: string);
  set ked(ked: Dict<any>);
  get pre(): string;
  get ked(): Dict<any>;
  get code(): string;
  get raw(): string;
  get sner(): CesrNumber;
  get sn(): number;
  get kind(): Serials;
  private _exhale;
  get ident(): Ident;
  get size(): number;
  get version(): Version;
  get verfers(): Verfer[];
  get digers(): Diger[];
  pretty(): string;
}
export declare function dumps(ked: Object, kind: Serials.JSON): string;
export declare function sizeify(
  ked: Dict<any>,
  kind?: Serials,
): [string, Ident, Serials, Dict<any>, Version];
