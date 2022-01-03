import type { IncomingPort, OutgoingPort } from "../Elm";

declare global {
  interface Navigator {
    wakeLock: WakeLock;
  }
}

// https://developer.mozilla.org/en-US/docs/Web/API/WakeLock
interface WakeLock {
  request(type: "screen"): Promise<WakeLockSentinel>;
}

// https://developer.mozilla.org/en-US/docs/Web/API/WakeLockSentinel
interface WakeLockSentinel extends EventTarget {
  readonly released: boolean;
  readonly type: "screen";

  release(): Promise<void>;

  onrelease?: (ev: Event) => void;
}

type IncomingEvent =
  | { type: "SendLockRequest" }
  | { type: "SendReleaseRequest" }
  | { type: "SendStatusRequest" };

type OutgoingEvent =
  | { type: "RecieveUnsupportedStatus" }
  | { type: "RecieveInitiallyLocked"; locked: boolean }
  | { type: "RecieveLocked" }
  | { type: "RecieveReleased" }
  | { type: "RecieveError"; error: string };

interface Ports {
  sendAppWakeLockEvent: IncomingPort<IncomingEvent>;
  recieveAppWakeLockEvent: OutgoingPort<OutgoingEvent>;
}

export function setup(ports: Ports): void {
  let sentinel: WakeLockSentinel | null;

  ports.sendAppWakeLockEvent.subscribe(async (ev) => {
    switch (ev.type) {
      case "SendLockRequest": {
        try {
          sentinel = await navigator.wakeLock.request("screen");

          sentinel.addEventListener("release", () => {
            ports.recieveAppWakeLockEvent.send({
              type: "RecieveReleased",
            });
            sentinel = null;
          });

          ports.recieveAppWakeLockEvent.send({
            type: "RecieveLocked",
          });
        } catch (err) {
          ports.recieveAppWakeLockEvent.send({
            type: "RecieveError",
            error: err instanceof Error ? err.message : String(err),
          });
        }

        return;
      }
      case "SendReleaseRequest": {
        try {
          await sentinel?.release();

          sentinel = null;

          // We don't need to send an event because the "release" listener above does that.
        } catch (err) {
          ports.recieveAppWakeLockEvent.send({
            type: "RecieveError",
            error: err instanceof Error ? err.message : String(err),
          });
        }
        return;
      }
      case "SendStatusRequest": {
        if (!("wakeLock" in navigator)) {
          ports.recieveAppWakeLockEvent.send({
            type: "RecieveUnsupportedStatus",
          });
          return;
        }

        ports.recieveAppWakeLockEvent.send({
          type: "RecieveInitiallyLocked",
          locked: !!sentinel,
        });

        return;
      }
    }
  });
}
