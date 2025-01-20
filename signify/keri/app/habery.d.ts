import { Manager } from "../core/manager";
import { Serder } from "../core/serder";
export declare class TraitCodex {
  EstOnly: string;
  DoNotDelegate: string;
  NoBackers: string;
}
export declare const TraitDex: TraitCodex;
export interface HaberyArgs {
  name: string;
  passcode?: string;
  seed?: string | undefined;
  aeid?: string | undefined;
  pidx?: number | undefined;
  salt?: string | undefined;
  tier?: string | undefined;
}
export interface MakeHabArgs {
  code?: string;
  transferable?: boolean;
  isith?: string;
  icount?: number;
  nsith?: string;
  ncount?: number;
  toad?: string | number;
  wits?: Array<string>;
  delpre?: string;
  estOnly?: boolean;
  DnD?: boolean;
  data?: any;
}
export declare class Hab {
  name: string;
  serder: Serder;
  constructor(name: string, icp: Serder);
  get pre(): string;
}
export declare class Habery {
  private readonly _name;
  private readonly _mgr;
  private readonly _habs;
  constructor({ name, passcode, seed, aeid, pidx, salt }: HaberyArgs);
  get mgr(): Manager;
  get habs(): Array<Hab>;
  habByName(name: string): Hab | undefined;
  makeHab(
    name: string,
    {
      code,
      transferable,
      isith,
      icount,
      nsith,
      ncount,
      toad,
      wits,
      delpre,
      estOnly,
      DnD,
      data,
    }: MakeHabArgs,
  ): Hab;
  get name(): string;
}
