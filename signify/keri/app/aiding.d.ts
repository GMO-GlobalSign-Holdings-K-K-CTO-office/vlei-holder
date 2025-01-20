import { Tier } from "../core/salter";
import { Algos } from "../core/manager";
import { Serder } from "../core/serder";
import { KeyManager } from "../core/keeping";
import { HabState } from "../core/state";
/** Arguments required to create an identfier */
export interface CreateIdentiferArgs {
  transferable?: boolean;
  isith?: string | number | string[];
  nsith?: string | number | string[];
  wits?: string[];
  toad?: number;
  proxy?: string;
  delpre?: string;
  dcode?: string;
  data?: any;
  algo?: Algos;
  pre?: string;
  states?: any[];
  rstates?: any[];
  prxs?: any[];
  nxts?: any[];
  mhab?: HabState;
  keys?: string[];
  ndigs?: string[];
  bran?: string;
  count?: number;
  ncount?: number;
  tier?: Tier;
  extern_type?: string;
  extern?: any;
}
/** Arguments required to rotate an identfier */
export interface RotateIdentifierArgs {
  transferable?: boolean;
  nsith?: string | number | string[];
  toad?: number;
  cuts?: string[];
  adds?: string[];
  data?: Array<object>;
  ncode?: string;
  ncount?: number;
  ncodes?: string[];
  states?: any[];
  rstates?: any[];
}
/**
 * Reducing the SignifyClient dependencies used by Identifier class
 */
export interface IdentifierDeps {
  fetch(
    pathname: string,
    method: string,
    body: unknown,
    headers?: Headers,
  ): Promise<Response>;
  pidx: number;
  manager: KeyManager | null;
}
/** Identifier */
export declare class Identifier {
  client: IdentifierDeps;
  /**
   * Identifier
   * @param {IdentifierDeps} client
   */
  constructor(client: IdentifierDeps);
  /**
   * List managed identifiers
   * @async
   * @param {number} [start=0] Start index of list of notifications, defaults to 0
   * @param {number} [end=24] End index of list of notifications, defaults to 24
   * @returns {Promise<any>} A promise to the list of managed identifiers
   */
  list(start?: number, end?: number): Promise<any>;
  /**
   * Get information for a managed identifier
   * @async
   * @param {string} name Name or alias of the identifier
   * @returns {Promise<any>} A promise to the identifier information
   */
  get(name: string): Promise<HabState>;
  /**
   * Create a managed identifier
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {CreateIdentiferArgs} [kargs] Optional parameters to create the identifier
   * @returns {EventResult} The inception result
   */
  create(name: string, kargs?: CreateIdentiferArgs): Promise<EventResult>;
  /**
   * Generate an interaction event in a managed identifier
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {any} [data] Option data to be anchored in the interaction event
   * @returns {Promise<EventResult>} A promise to the interaction event result
   */
  interact(name: string, data?: any): Promise<EventResult>;
  createInteract(
    name: string,
    data?: any,
  ): Promise<{
    serder: any;
    sigs: any;
    jsondata: any;
  }>;
  /**
   * Generate a rotation event in a managed identifier
   * @param {string} name Name or alias of the identifier
   * @param {RotateIdentifierArgs} [kargs] Optional parameters requiered to generate the rotation event
   * @returns {Promise<EventResult>} A promise to the rotation event result
   */
  rotate(name: string, kargs?: RotateIdentifierArgs): Promise<EventResult>;
  /**
   * Authorize an endpoint provider in a given role for a managed identifier
   * @remarks
   * Typically used to authorize the agent to be the endpoint provider for the identifier in the role of `agent`
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {string} role Authorized role for eid
   * @param {string} [eid] Optional qb64 of endpoint provider to be authorized
   * @param {string} [stamp=now] Optional date-time-stamp RFC-3339 profile of iso8601 datetime. Now is the default if not provided
   * @returns {Promise<EventResult>} A promise to the result of the authorization
   */
  addEndRole(
    name: string,
    role: string,
    eid?: string,
    stamp?: string,
  ): Promise<EventResult>;
  /**
   * Generate an /end/role/add reply message
   * @param {string} pre Prefix of the identifier
   * @param {string} role Authorized role for eid
   * @param {string} [eid] Optional qb64 of endpoint provider to be authorized
   * @param {string} [stamp=now] Optional date-time-stamp RFC-3339 profile of iso8601 datetime. Now is the default if not provided
   * @returns {Serder} The reply message
   */
  private makeEndRole;
  /**
   * Get the members of a group identifier
   * @async
   * @param {string} name - Name or alias of the identifier
   * @returns {Promise<any>} - A promise to the list of members
   */
  members(name: string): Promise<any>;
}
/** Event Result */
export declare class EventResult {
  private readonly _serder;
  private readonly _sigs;
  private readonly promise;
  constructor(
    serder: Serder,
    sigs: string[],
    promise: Promise<Response> | Response,
  );
  get serder(): Serder;
  get sigs(): string[];
  op(): Promise<any>;
}
