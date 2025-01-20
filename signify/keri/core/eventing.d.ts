import { Serials, Version } from "./core";
import { Serder } from "./serder";
import { Siger } from "./siger";
import { Cigar } from "./cigar";
export interface RotateArgs {
  pre?: string;
  keys: Array<string>;
  dig?: string;
  ilk?: string;
  sn?: number;
  isith?: number | string | Array<string>;
  ndigs?: Array<string>;
  nsith?: number | string | Array<string>;
  toad?: number;
  wits?: Array<string>;
  cuts?: Array<string>;
  adds?: Array<string>;
  cnfg?: Array<string>;
  data?: Array<object>;
  version?: Version;
  kind?: Serials;
  size?: number;
  intive?: boolean;
}
export declare function rotate({
  pre,
  keys,
  dig,
  ilk,
  sn,
  isith,
  ndigs,
  nsith,
  wits,
  cuts,
  adds,
  toad,
  data,
  version,
  kind,
  intive,
}: RotateArgs): Serder;
export declare function ample(n: number, f?: number, weak?: boolean): number;
export interface InceptArgs {
  keys: Array<string>;
  isith?: number | string | Array<string>;
  ndigs?: Array<string>;
  nsith?: number | string | Array<string>;
  toad?: number | string;
  wits?: Array<string>;
  cnfg?: Array<string>;
  data?: Array<object>;
  version?: Version;
  kind?: Serials;
  code?: string;
  intive?: boolean;
  delpre?: string;
}
export declare function incept({
  keys,
  isith,
  ndigs,
  nsith,
  toad,
  wits,
  cnfg,
  data,
  version,
  kind,
  code,
  intive,
  delpre,
}: InceptArgs): Serder;
export declare function messagize(
  serder: Serder,
  sigers?: Array<Siger>,
  seal?: any,
  wigers?: Array<Cigar>,
  cigars?: Array<Cigar>,
  pipelined?: boolean,
): Uint8Array;
interface InteractArgs {
  pre: string;
  dig: string;
  sn: number;
  data: Array<any>;
  version: Version | undefined;
  kind: Serials | undefined;
}
export declare function interact(args: InteractArgs): Serder;
export declare function reply(
  route: string | undefined,
  data: any | undefined,
  stamp: string | undefined,
  version: Version | undefined,
  kind?: Serials,
): Serder;
export {};
