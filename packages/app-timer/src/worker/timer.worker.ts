import { TimerMessage, isValidTimerMessage } from "./message";

self.addEventListener("message", (ev: MessageEvent) => {
  if (!isValidTimerMessage(ev.data)) {
    return;
  }

  switch (ev.data.type) {
    case "ping":
      self.postMessage({
        type: "pong",
      } as TimerMessage);
      return;
    case "set_schedule": {
      const schedule = ev.data;

      setInterval(() => {
        self.postMessage({
          type: "reach_scheduled_time",
          time: schedule.time,
          id: schedule.id,
        } as TimerMessage);
      }, Date.parse(schedule.time) - new Date().valueOf());
      return;
    }
  }
});

// https://github.com/webpack-contrib/worker-loader/issues/94#issuecomment-449861198
export default {} as typeof Worker & { new (): Worker };
