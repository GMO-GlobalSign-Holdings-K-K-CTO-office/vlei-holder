export declare enum Serials {
  JSON = "JSON",
}
export declare enum Ident {
  KERI = "KERI",
  ACDC = "ACDC",
}
export declare class Version {
  major: number;
  minor: number;
  constructor(major?: number, minor?: number);
}
export declare const Versionage: Version;
export declare const Ilks: {
  icp: string;
  rot: string;
  ixn: string;
  dip: string;
  drt: string;
  rct: string;
  vrc: string;
  rpy: string;
  exn: string;
  vcp: string;
  iss: string;
  rev: string;
};
export declare const IcpLabels: string[];
export declare const DipLabels: string[];
export declare const RotLabels: string[];
export declare const DrtLabels: string[];
export declare const IxnLabels: string[];
export declare const KsnLabels: string[];
export declare const RpyLabels: string[];
export declare const VERFULLSIZE = 17;
export declare const MINSNIFFSIZE: number;
export declare const MINSIGSIZE = 4;
export declare const VEREX =
  "(KERI|ACDC)([0-9a-f])([0-9a-f])([A-Z]{4})([0-9a-f]{6})_";
export interface Dict<TValue> {
  [id: string]: TValue;
}
/**
 * @description This function is use to deversify the version
 * Here we will use regex to  to validate and extract serialization kind,size and version
 * @param {string} versionString   version string
 * @return {Object}  contaning prototol (KERI or ACDC), kind of serialization like cbor,json,mgpk
 *                    version = version of object ,size = raw size integer
 */
export declare function deversify(
  versionString: string,
): [Ident, Serials, Version, string];
export declare function versify(
  ident?: Ident,
  version?: Version,
  kind?: Serials,
  size?: number,
): string;
export declare const B64ChrByIdx: Map<number, string>;
export declare const B64IdxByChr: Map<string, number>;
export declare function intToB64(i: number, l?: number): string;
export declare function intToB64b(n: number, l?: number): Uint8Array;
export declare function b64ToInt(s: string): number;
export declare function b(s?: string): Uint8Array;
export declare function d(u?: Uint8Array): string;
export declare function concat(one: Uint8Array, two: Uint8Array): Uint8Array;
export declare function readInt(array: Uint8Array): number;
