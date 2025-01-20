export declare class Tholder {
  private _weighted;
  private _thold;
  private _size;
  private _number;
  private _satisfy;
  constructor(kargs: { thold?: any; limen?: any; sith?: any });
  get weighted(): boolean;
  get thold(): any;
  get size(): number;
  get limen(): any;
  get sith(): string;
  get json(): string;
  get num(): number | undefined;
  private _processThold;
  private _processLimen;
  private _processSith;
  private _processClauses;
  private _processUnweighted;
  private _processWeighted;
  private weight;
  private _satisfy_numeric;
  private _satisfy_weighted;
  satisfy(indices: any): boolean;
}
