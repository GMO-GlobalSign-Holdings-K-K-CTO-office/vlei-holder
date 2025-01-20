import { Serder } from "./serder";
export declare function pad(n: any, width?: number, z?: number): string;
/**
 * @description  Returns list of depth first recursively extracted values from elements of
    key event dict ked whose flabels are in lables list

 * @param {*} ked  ked is key event dict
 * @param {*} labels    labels is list of element labels in ked from which to extract values
 */
export declare function extractValues(ked: any, labels: any): any;
export declare function arrayEquals(ar1: Uint8Array, ar2: Uint8Array): boolean;
/**
 * @description Returns True if obj is non-string iterable, False otherwise

 * @param {*} obj
 */
export declare function nowUTC(): Date;
export declare function range(
  start: number,
  stop: number,
  step: number,
): number[];
export declare function intToBytes(value: number, length: number): Uint8Array;
export declare function bytesToInt(ar: Uint8Array): number;
export declare function serializeACDCAttachment(anc: Serder): Uint8Array;
export declare function serializeIssExnAttachment(anc: Serder): Uint8Array;
