import { EventResult } from "./aiding";
import { SignifyClient } from "./clienting";
export declare class Delegations {
  client: SignifyClient;
  /**
   * Delegations
   * @param {SignifyClient} client
   */
  constructor(client: SignifyClient);
  /**
   * Approve the delegation via interaction event
   * @async
   * @param {string} name Name or alias of the identifier
   * @param {any} [data] The anchoring interaction event
   * @returns {Promise<EventResult>} A promise to the delegated approval result
   */
  approve(name: string, data?: any): Promise<EventResult>;
}
