import { SignifyClient } from "./clienting";
import { Dict } from "../core/core";
import { Serder } from "../core/serder";
import { HabState } from "../core/state";
/**
 * Exchanges
 */
export declare class Exchanges {
  client: SignifyClient;
  /**
   * Exchanges
   * @param {SignifyClient} client
   */
  constructor(client: SignifyClient);
  /**
   * Create exn message
   * @async
   * @returns {Promise<any>} A promise to the list of replay messages
   * @param sender
   * @param route
   * @param payload
   * @param embeds
   * @param recipient
   * @param datetime
   * @param dig
   */
  createExchangeMessage(
    sender: HabState,
    route: string,
    payload: Dict<any>,
    embeds: Dict<any>,
    recipient: string,
    datetime?: string,
    dig?: string,
  ): Promise<[Serder, string[], string]>;
  /**
   * Send exn messages to list of recipients
   * @async
   * @returns {Promise<any>} A promise to the list of replay messages
   * @param name
   * @param topic
   * @param sender
   * @param route
   * @param payload
   * @param embeds
   * @param recipients
   */
  send(
    name: string,
    topic: string,
    sender: HabState,
    route: string,
    payload: Dict<any>,
    embeds: Dict<any>,
    recipients: string[],
  ): Promise<any>;
  /**
   * Send exn messaget to list of recipients
   * @async
   * @returns {Promise<any>} A promise to the list of replay messages
   * @param name
   * @param topic
   * @param exn
   * @param sigs
   * @param atc
   * @param recipients
   */
  sendFromEvents(
    name: string,
    topic: string,
    exn: Serder,
    sigs: string[],
    atc: string,
    recipients: string[],
  ): Promise<any>;
  /**
   * Get exn message by said
   * @async
   * @returns A promise to the exn message
   * @param said The said of the exn message
   */
  get(said: string): Promise<any>;
}
export declare function exchange(
  route: string,
  payload: Dict<any>,
  sender: string,
  recipient: string,
  date?: string,
  dig?: string,
  modifiers?: Dict<any>,
  embeds?: Dict<any>,
): [Serder, Uint8Array];
