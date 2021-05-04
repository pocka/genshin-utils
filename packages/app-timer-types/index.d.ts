export type Unsubscribe = () => void;

export interface TimerModule {
  /**
   * Run the callback at the given time.
   */
  schedule(on: Date, callback: () => void): Unsubscribe;
}
