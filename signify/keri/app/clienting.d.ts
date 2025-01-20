import { Authenticater } from "../core/authing";
import { ExternalModule, KeyManager } from "../core/keeping";
import { Tier } from "../core/salter";
import { Identifier } from "./aiding";
import { Contacts, Challenges } from "./contacting";
import { Agent, Controller } from "./controller";
import { Oobis, Operations, KeyEvents, KeyStates } from "./coring";
import { Credentials, Ipex, Registries, Schemas } from "./credentialing";
import { Delegations } from "./delegating";
import { Escrows } from "./escrowing";
import { Exchanges } from "./exchanging";
import { Groups } from "./grouping";
import { Notifications } from "./notifying";
declare class State {
  agent: any | null;
  controller: any | null;
  ridx: number;
  pidx: number;
  constructor();
}
/** SignifyClient */
export declare class SignifyClient {
  controller: Controller;
  url: string;
  bran: string;
  pidx: number;
  agent: Agent | null;
  authn: Authenticater | null;
  manager: KeyManager | null;
  tier: Tier;
  bootUrl: string;
  exteralModules: ExternalModule[];
  /**
   * SignifyClient constructor
   * @param {string} url KERIA admin interface URL
   * @param {string} bran Base64 21 char string that is used as base material for seed of the client AID
   * @param {Tier} tier Security tier for generating keys of the client AID (high | mewdium | low)
   * @param {string} bootUrl KERIA boot interface URL
   * @param {ExternalModule[]} externalModules list of external modules to load
   */
  constructor(
    url: string,
    bran: string,
    tier?: Tier,
    bootUrl?: string,
    externalModules?: ExternalModule[],
  );
  get data(): (string | number | Authenticater | null)[];
  /**
   * Boot a KERIA agent
   * @async
   * @returns {Promise<Response>} A promise to the result of the boot
   */
  boot(): Promise<Response>;
  /**
   * Get state of the agent and the client
   * @async
   * @returns {Promise<Response>} A promise to the state
   */
  state(): Promise<State>;
  /**  Connect to a KERIA agent
   * @async
   */
  connect(): Promise<void>;
  /**
   * Fetch a resource from the KERIA agent
   * @async
   * @param {string} path Path to the resource
   * @param {string} method HTTP method
   * @param {any} data Data to be sent in the body of the resource
   * @param {Headers} [extraHeaders] Optional extra headers to be sent with the request
   * @returns {Promise<Response>} A promise to the result of the fetch
   */
  fetch(
    path: string,
    method: string,
    data: any,
    extraHeaders?: Headers,
  ): Promise<Response>;
  /**
   * Create a Signed Request to fetch a resource from an external URL with headers signed by an AID
   * @async
   * @param {string} aidName Name or alias of the AID to be used for signing
   * @param {string} url URL of the requested resource
   * @param {RequestInit} req Request options should include:
   *     - method: HTTP method
   *     - data Data to be sent in the body of the resource.
   *              If the data is a CESR JSON string then you should also set contentType to 'application/json+cesr'
   *              If the data is a FormData object then you should not set the contentType and the browser will set it to 'multipart/form-data'
   *              If the data is an object then you should use JSON.stringify to convert it to a string and set the contentType to 'application/json'
   *     - contentType Content type of the request.
   * @returns {Promise<Request>} A promise to the created Request
   */
  createSignedRequest(
    aidName: string,
    url: string,
    req: RequestInit,
  ): Promise<Request>;
  /**
   * Approve the delegation of the client AID to the KERIA agent
   * @async
   * @returns {Promise<Response>} A promise to the result of the approval
   */
  approveDelegation(): Promise<Response>;
  /**
   * Save old client passcode in KERIA agent
   * @async
   * @param {string} passcode Passcode to be saved
   * @returns {Promise<Response>} A promise to the result of the save
   */
  saveOldPasscode(passcode: string): Promise<Response>;
  /**
   * Delete a saved passcode from KERIA agent
   * @async
   * @returns {Promise<Response>} A promise to the result of the deletion
   */
  deletePasscode(): Promise<Response>;
  /**
   * Rotate the client AID
   * @async
   * @param {string} nbran Base64 21 char string that is used as base material for the new seed
   * @param {Array<string>} aids List of managed AIDs to be rotated
   * @returns {Promise<Response>} A promise to the result of the rotation
   */
  rotate(nbran: string, aids: string[]): Promise<Response>;
  /**
   * Get identifiers resource
   * @returns {Identifier}
   */
  identifiers(): Identifier;
  /**
   * Get OOBIs resource
   * @returns {Oobis}
   */
  oobis(): Oobis;
  /**
   * Get operations resource
   * @returns {Operations}
   */
  operations(): Operations;
  /**
   * Get keyEvents resource
   * @returns {KeyEvents}
   */
  keyEvents(): KeyEvents;
  /**
   * Get keyStates resource
   * @returns {KeyStates}
   */
  keyStates(): KeyStates;
  /**
   * Get credentials resource
   * @returns {Credentials}
   */
  credentials(): Credentials;
  /**
   * Get IPEX resource
   * @returns {Ipex}
   */
  ipex(): Ipex;
  /**
   * Get registries resource
   * @returns {Registries}
   */
  registries(): Registries;
  /**
   * Get schemas resource
   * @returns {Schemas}
   */
  schemas(): Schemas;
  /**
   * Get challenges resource
   * @returns {Challenges}
   */
  challenges(): Challenges;
  /**
   * Get contacts resource
   * @returns {Contacts}
   */
  contacts(): Contacts;
  /**
   * Get notifications resource
   * @returns {Notifications}
   */
  notifications(): Notifications;
  /**
   * Get escrows resource
   * @returns {Escrows}
   */
  escrows(): Escrows;
  /**
   * Get groups resource
   * @returns {Groups}
   */
  groups(): Groups;
  /**
   * Get exchange resource
   * @returns {Exchanges}
   */
  exchanges(): Exchanges;
  /**
   * Get delegations resource
   * @returns {Delegations}
   */
  delegations(): Delegations;
}
export {};
