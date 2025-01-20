import { SignifyClient } from "./clienting";
/**
 * Notifications
 */
export declare class Notifications {
  client: SignifyClient;
  /**
   * Notifications
   * @param {SignifyClient} client
   */
  constructor(client: SignifyClient);
  /**
   * List notifications
   * @async
   * @param {number} [start=0] Start index of list of notifications, defaults to 0
   * @param {number} [end=24] End index of list of notifications, defaults to 24
   * @returns {Promise<any>} A promise to the list of notifications
   */
  list(start?: number, end?: number): Promise<any>;
  /**
   * Mark a notification as read
   * @async
   * @param {string} said SAID of the notification
   * @returns {Promise<string>} A promise to the result of the marking
   */
  mark(said: string): Promise<string>;
  /**
   * Delete a notification
   * @async
   * @param {string} said SAID of the notification
   * @returns {Promise<any>} A promise to the result of the deletion
   */
  delete(said: string): Promise<void>;
}
