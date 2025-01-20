import { Matter, MatterArgs } from "./matter";
/**
 * @description  Seqner: subclass of Matter, cryptographic material, for ordinal numbers
 * such as sequence numbers or first seen ordering numbers.
 * Seqner provides fully qualified format for ordinals (sequence numbers etc)
 * when provided as attached cryptographic material elements.
 */
export declare class Seqner extends Matter {
  constructor({
    raw,
    code,
    qb64,
    qb64b,
    qb2,
    sn,
    snh,
    ...kwa
  }: MatterArgs & {
    sn?: number;
    snh?: string;
  });
  get sn(): number;
  get snh(): string;
}
