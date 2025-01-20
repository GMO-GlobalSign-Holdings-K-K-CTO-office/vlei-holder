import { SignifyClient } from "./clienting";
export declare function randomPasscode(): string;
export declare function randomNonce(): string;
export declare class Oobis {
  client: SignifyClient;
  /**
   * Oobis
   * @param {SignifyClient} client
   */
  constructor(client: SignifyClient);
  /**
   * Get the OOBI(s) for a managed indentifier for a given role
   * @param {string} name Name or alias of the identifier
   * @param {string} role Authorized role
   * @returns {Promise<any>} A promise to the OOBI(s)
   */
  get(name: string, role?: string): Promise<any>;
  /**
   * Resolve an OOBI
   * @async
   * @param {string} oobi The OOBI to be resolver
   * @param {string} [alias] Optional name or alias to link the OOBI resolution to a contact
   * @returns {Promise<any>} A promise to the long-running operation
   */
  resolve(oobi: string, alias?: string): Promise<any>;
}
export interface Operation<T = unknown> {
  name: string;
  metadata?: {
    depends?: Operation;
    [property: string]: any;
  };
  done?: boolean;
  error?: any;
  response?: T;
}
export interface OperationsDeps {
  fetch(
    pathname: string,
    method: string,
    body: unknown,
    headers?: Headers,
  ): Promise<Response>;
}
/**
 * Operations
 * @remarks
 * Operations represent the status and result of long running tasks performed by KERIA agent
 */
export declare class Operations {
  client: OperationsDeps;
  /**
   * Operations
   * @param {SignifyClient} client
   */
  constructor(client: OperationsDeps);
  /**
   * Get operation status
   * @async
   * @param {string} name Name of the operation
   * @returns {Promise<Operation>} A promise to the status of the operation
   */
  get<T = unknown>(name: string): Promise<Operation<T>>;
  /**
   * List operations
   * @async
   * @param {string} type Select operations by type
   * @returns {Promise<Operation[]>} A list of operations
   */
  list(type?: string): Promise<Operation<any>[]>;
  /**
   * Delete operation
   * @async
   * @param {string} name Name of the operation
   */
  delete(name: string): Promise<void>;
  /**
   * Poll for operation to become completed.
   */
  wait<T>(
    op: Operation<T>,
    options?: {
      signal?: AbortSignal;
      minSleep?: number;
      maxSleep?: number;
      increaseFactor?: number;
    },
  ): Promise<Operation<T>>;
}
/**
 * KeyEvents
 */
export declare class KeyEvents {
  client: SignifyClient;
  /**
   * KeyEvents
   * @param {SignifyClient} client
   */
  constructor(client: SignifyClient);
  /**
   * Retrieve key events for an identifier
   * @async
   * @param {string} pre Identifier prefix
   * @returns {Promise<any>} A promise to the key events
   */
  get(pre: string): Promise<any>;
}
/**
 * KeyStates
 */
export declare class KeyStates {
  client: SignifyClient;
  /**
   * KeyStates
   * @param {SignifyClient} client
   */
  constructor(client: SignifyClient);
  /**
   * Retriene the key state for an identifier
   * @async
   * @param {string} pre Identifier prefix
   * @returns {Promise<any>} A promise to the key states
   */
  get(pre: string): Promise<any>;
  /**
   * Retrieve the key state for a list of identifiers
   * @async
   * @param {Array<string>} pres List of identifier prefixes
   * @returns {Promise<any>} A promise to the key states
   */
  list(pres: string[]): Promise<any>;
  /**
   * Query the key state of an identifier for a given sequence number or anchor
   * @async
   * @param {string} pre Identifier prefix
   * @param {number} [sn] Optional sequence number
   * @param {any} [anchor] Optional anchor
   * @returns {Promise<any>} A promise to the long-running operation
   */
  query(pre: string, sn?: string, anchor?: any): Promise<any>;
}
