import { Matter, MatterArgs } from "./matter";
export declare const Reb64: RegExp;
export declare class Bexter extends Matter {
  constructor({ raw, code, qb64b, qb64, qb2 }: MatterArgs, bext?: string);
  static _rawify(bext: string): Uint8Array;
  get bext(): string;
}
