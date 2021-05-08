import { ReactiveController, ReactiveControllerHost } from "lit";

export class ClockController implements ReactiveController {
  host: ReactiveControllerHost;

  /**
   * Datetime of the current tick.
   */
  value: Date = new Date();

  #interval: number;
  #intervalId?: number;

  /**
   * @param tickInterval tick interval in milliseconds.
   */
  constructor(host: ReactiveControllerHost, tickInterval = 1000) {
    this.host = host;
    this.host.addController(this);

    this.#interval = tickInterval;
  }

  hostConnected() {
    this.#intervalId = setInterval(() => {
      this.value = new Date();
      this.host.requestUpdate();
    }, this.#interval);
  }

  hostDisconnected() {
    if (this.#intervalId) {
      clearInterval(this.#intervalId);
      this.#intervalId = undefined;
    }
  }
}
