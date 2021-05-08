import type { TimerModule } from "@genshin-utils/app-timer-types";
import { v4 as uuid } from "uuid";

import TimerWorker from "../worker/timer.worker";
import { TimerMessage, isValidTimerMessage } from "../worker/message";

const timerWorker = new TimerWorker();

export const schedule: TimerModule["schedule"] = (on, callback) => {
  const id = uuid();
  let called = false;

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

    if (!called) {
      callback();
      called = true;
    }

    timerWorker.removeEventListener("message", messageListener);
  };

  timerWorker.addEventListener("message", messageListener);

  const onVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      return;
    }

    // If the scheduled date is not reached yet:
    if (on.valueOf() > Date.now().valueOf()) {
      return;
    }

    if (!called) {
      callback();
      called = true;
      timerWorker.removeEventListener("message", messageListener);
    }

    document.removeEventListener("visibilitychange", onVisibilityChange);
  };

  document.addEventListener("visibilitychange", onVisibilityChange);

  timerWorker.postMessage({
    type: "set_schedule",
    id,
    time: on.toISOString(),
  } as TimerMessage);

  return () => {
    timerWorker.removeEventListener("message", messageListener);
    document.removeEventListener("visibilitychange", onVisibilityChange);
  };
};
