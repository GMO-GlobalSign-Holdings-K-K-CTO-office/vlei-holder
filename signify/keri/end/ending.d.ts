export declare const FALSY: (string | number | boolean)[];
export declare const TRUTHY: (string | number | boolean)[];
export declare class Signage {
  constructor(
    markers: any,
    indexed?: boolean,
    signer?: string,
    ordinal?: string,
    digest?: string,
    kind?: string,
  );
  markers: any;
  indexed: boolean | undefined;
  signer: string | undefined;
  ordinal: string | undefined;
  digest: string | undefined;
  kind: string | undefined;
}
export declare function signature(signages: Array<Signage>): Headers;
export declare function designature(value: string): Signage[];
