import { SignifyClient } from "./clienting";
/**
 * Escrows
 */
export declare class Escrows {
  client: SignifyClient;
  /**
   * Escrows
   * @param {SignifyClient} client
   */
  constructor(client: SignifyClient);
  /**
   * List replay messages
   * @async
   * @param {string} [route] Optional route in the replay message
   * @returns {Promise<any>} A promise to the list of replay messages
   */
  listReply(route?: string): Promise<any>;
}
