import { Bexter } from "./bexter";
import { MatterArgs } from "./matter";
export declare class Pather extends Bexter {
  constructor(
    { raw, code, qb64b, qb64, qb2 }: MatterArgs,
    bext?: string,
    path?: string[],
  );
  get path(): string[];
  static _bextify(path: any[]): string;
}
