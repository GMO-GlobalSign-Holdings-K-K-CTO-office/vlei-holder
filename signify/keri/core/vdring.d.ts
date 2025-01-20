import { Serials, Version } from "../core/core";
import { Serder } from "./serder";
declare namespace vdr {
  interface VDRInceptArgs {
    pre: string;
    toad?: number | string;
    nonce?: string;
    baks?: string[];
    cnfg?: string[];
    version?: Version;
    kind?: Serials;
    code?: string;
  }
  function incept({
    pre,
    toad,
    nonce,
    baks,
    cnfg,
    version,
    kind,
    code,
  }: VDRInceptArgs): Serder;
}
export { vdr };
