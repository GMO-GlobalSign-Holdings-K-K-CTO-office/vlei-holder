import { SignifyClient } from "./clienting";
import { Operation } from "./coring";
/**
 * Contacts
 */
export declare class Contacts {
  client: SignifyClient;
  /**
   * Contacts
   * @param {SignifyClient} client
   */
  constructor(client: SignifyClient);
  /**
   * List contacts
   * @async
   * @param {string} [group] Optional group name to filter contacts
   * @param {string} [filterField] Optional field name to filter contacts
   * @param {string} [filterValue] Optional field value to filter contacts
   * @returns {Promise<any>} A promise to the list of contacts
   */
  list(
    group?: string,
    filterField?: string,
    filterValue?: string,
  ): Promise<any>;
  /**
   * Get a contact
   * @async
   * @param {string} pre Prefix of the contact
   * @returns {Promise<any>} A promise to the contact
   */
  get(pre: string): Promise<any>;
  /**
   * Add a contact
   * @async
   * @param {string} pre Prefix of the contact
   * @param {any} info Information about the contact
   * @returns {Promise<any>} A promise to the result of the addition
   */
  add(pre: string, info: any): Promise<any>;
  /**
   * Delete a contact
   * @async
   * @param {string} pre Prefix of the contact
   * @returns {Promise<void>}
   */
  delete(pre: string): Promise<void>;
  /**
   * Update a contact
   * @async
   * @param {string} pre Prefix of the contact
   * @param {any} info Updated information about the contact
   * @returns {Promise<any>} A promise to the result of the update
   */
  update(pre: string, info: any): Promise<any>;
}
/**
 * Challenges
 */
export declare class Challenges {
  client: SignifyClient;
  /**
   * Challenges
   * @param {SignifyClient} client
   */
  constructor(client: SignifyClient);
  /**
   * Generate a random challenge word list based on BIP39
   * @async
   * @param {number} strength Integer representing the strength of the challenge. Typically 128 or 256
   * @returns {Promise<any>} A promise to the list of random words
   */
  generate(strength?: number): Promise<any>;
  /**
   * Respond to a challenge by signing a message with the list of words
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {string} recipient Prefix of the recipient of the response
   * @param {Array<string>} words List of words to embed in the signed response
   * @returns {Promise<Response>} A promise to the result of the response
   */
  respond(name: string, recipient: string, words: string[]): Promise<Response>;
  /**
   * Ask Agent to verify a given sender signed the provided words
   * @param {string} source Prefix of the identifier that was challenged
   * @param {Array<string>} words List of challenge words to check for
   * @returns A promise to the long running operation
   */
  verify(source: string, words: string[]): Promise<Operation<unknown>>;
  /**
   * Mark challenge response as signed and accepted
   * @param {string} source Prefix of the identifier that was challenged
   * @param {string} said qb64 AID of exn message representing the signed response
   * @returns {Promise<Response>} A promise to the result
   */
  responded(source: string, said: string): Promise<Response>;
}
