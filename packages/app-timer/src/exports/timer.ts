import { v4 as uuid } from "uuid";

import TimerWorker from "../worker/timer.worker";
import { TimerMessage, isValidTimerMessage } from "../worker/message";

const timerWorker = new TimerWorker();

export type Unsubscribe = () => void;

export function schedule(on: Date, callback: () => void): Unsubscribe {
  const id = uuid();

  const messageListener = (ev: MessageEvent) => {
    if (
      !isValidTimerMessage(ev.data) ||
      ev.data.type !== "reach_scheduled_time"
    ) {
      return;
    }

    if (ev.data.id !== id) {
      return;
    }

    callback();

    timerWorker.removeEventListener("message", messageListener);
  };

  timerWorker.addEventListener("message", messageListener);

  timerWorker.postMessage({
    type: "set_schedule",
    id,
    time: on.toISOString(),
  } as TimerMessage);

  return () => {
    timerWorker.removeEventListener("message", messageListener);
  };
}
