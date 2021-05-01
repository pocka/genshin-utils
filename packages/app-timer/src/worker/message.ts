export interface PingMessage {
  type: "ping";
}
export interface PongMessage {
  type: "pong";
}

export interface SetScheduleMessage {
  type: "set_schedule";
  id: string;
  time: string;
}

export interface ReachScheduledTimeMessage {
  type: "reach_scheduled_time";
  id: string;
  time: string;
}

export type TimerMessage =
  | PingMessage
  | PongMessage
  | SetScheduleMessage
  | ReachScheduledTimeMessage;

export function isValidTimerMessage(message: any): message is TimerMessage {
  // Different data-type
  if (!message || typeof message !== "object") {
    return false;
  }

  // Contextually different
  switch (message.type) {
    case "ping":
    case "pong":
    case "set_schedule":
    case "reach_scheduled_time":
      return true;
    default:
      return false;
  }
}
