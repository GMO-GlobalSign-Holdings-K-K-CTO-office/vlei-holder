import { Signer } from "./signer";
import { Matter } from "./matter";
export declare enum Tier {
  low = "low",
  med = "med",
  high = "high",
}
interface SalterArgs {
  raw?: Uint8Array | undefined;
  code?: string;
  tier?: Tier;
  qb64b?: Uint8Array | undefined;
  qb64?: string;
  qb2?: Uint8Array | undefined;
}
export declare class Salter extends Matter {
  private readonly _tier;
  constructor({ raw, code, tier, qb64, qb64b, qb2 }: SalterArgs);
  private stretch;
  signer(
    code?: string,
    transferable?: boolean,
    path?: string,
    tier?: Tier | null,
    temp?: boolean,
  ): Signer;
  get tier(): Tier | null;
}
export {};
