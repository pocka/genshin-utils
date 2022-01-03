/**
 * A port that sends a value from Elm to JS.
 */
export interface IncomingPort<T = void> {
  subscribe(cb: (value: T) => void): void;
  unsubscribe(cb: (value: T) => void): void;
}

/**
 * A port that sends a value from JS to Elm.
 */
export interface OutgoingPort<T = void> {
  send(value: T): void;
}
