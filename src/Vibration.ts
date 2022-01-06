import type { IncomingPort } from "./Elm";

type IncomingEvent = {
  type: "Vibrate";
  pattern: readonly number[];
};

interface Ports {
  sendVibrationEvent: IncomingPort<IncomingEvent>;
}

export function setup(ports: Ports) {
  ports.sendVibrationEvent.subscribe((ev) => {
    switch (ev.type) {
      case "Vibrate": {
        navigator.vibrate(ev.pattern);
        return;
      }
    }
  });
}
