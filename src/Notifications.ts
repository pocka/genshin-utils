import type { IncomingPort, OutgoingPort } from "./Elm";

type Availability =
  | "PlatformNotSupported"
  | "RequiresPermission"
  | "PermissionRequestDenied"
  | "RequestingPermission"
  | "Available";

interface Ports {
  recieveNotificationsEvent: OutgoingPort<{
    type: "RecieveAvailability";
    availability: Availability;
  }>;
  sendNotificationsEvent: IncomingPort<
    | { type: "CheckAvailability" }
    | { type: "RequestPermission" }
    | {
        type: "Send";
        notification: { title: string; options: NotificationOptions };
      }
  >;
}

function getAvailability(permission?: NotificationPermission): Availability {
  if (!("Notification" in window)) {
    return "PlatformNotSupported";
  }

  switch (permission || Notification.permission) {
    case "granted":
      return "Available";
    case "denied":
      return "PermissionRequestDenied";
    case "default":
      return "RequiresPermission";
  }
}

export function setup(ports: Ports): void {
  ports.sendNotificationsEvent.subscribe((ev) => {
    switch (ev.type) {
      case "CheckAvailability": {
        ports.recieveNotificationsEvent.send({
          type: "RecieveAvailability",
          availability: getAvailability(),
        });
        return;
      }

      case "RequestPermission": {
        if (Notification.permission === "granted") {
          ports.recieveNotificationsEvent.send({
            type: "RecieveAvailability",
            availability: "Available",
          });
          return;
        }

        ports.recieveNotificationsEvent.send({
          type: "RecieveAvailability",
          availability: "RequestingPermission",
        });

        Notification.requestPermission().then((p) => {
          ports.recieveNotificationsEvent.send({
            type: "RecieveAvailability",
            availability: getAvailability(p),
          });
        });
        return;
      }
      case "Send": {
        navigator.serviceWorker.ready.then((sw) => {
          sw.showNotification(ev.notification.title, ev.notification.options);
        });
        return;
      }
    }
  });
}
