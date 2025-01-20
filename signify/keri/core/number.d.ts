import { Matter, MatterArgs } from "./matter";
export declare class CesrNumber extends Matter {
  constructor(
    { raw, code, qb64b, qb64, qb2 }: MatterArgs,
    num?: number | string,
    numh?: string,
  );
  get num(): number;
  get numh(): string;
  get positive(): boolean;
}
