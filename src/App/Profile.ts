import * as localforage from "localforage";

import type { IncomingPort } from "../Elm";

const LOCALFORAGE_KEY = "profile_v2";

export interface GameServer {
  id: string;
  tzOffset: number;
  name: string;
  shortName: string;
}

export interface Profile {
  server: GameServer;
  theme: string;
  preference:
    | { version: "1" }
    | {
        version: "2";
        language: string;
      }
    | {
        version: "3";
        language: string;
        inAppNotification: boolean;
        browserNotification: boolean;
      };
}

interface IncomingEvent {
  type: "PersistProfile";
  profile: Profile;
}

interface Ports {
  sendAppProfileEvent: IncomingPort<IncomingEvent>;
}

export function setup(ports: Ports): void {
  ports.sendAppProfileEvent.subscribe((ev) => {
    switch (ev.type) {
      case "PersistProfile": {
        document.documentElement.setAttribute(
          "data-adw-theme",
          ev.profile.theme
        );
        localforage.setItem<Profile>(LOCALFORAGE_KEY, ev.profile);
        return;
      }
    }
  });
}

export function load(): Promise<Profile | null> {
  return localforage.getItem<Profile>(LOCALFORAGE_KEY);
}
