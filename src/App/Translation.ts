import merge from "lodash.merge";

import type { IncomingPort, OutgoingPort } from "../Elm";
import type { Profile } from "./Profile";

import enGB from "../translations/en-GB.json";

interface IncomingEvent {
  type: "RequestTranslation";
  lang: string;
}

type OutgoingEvent =
  | {
      type: "RecievedTranslation";
      translation: unknown;
    }
  | {
      type: "FailedToFetch";
      error: string;
    };

interface Ports {
  sendAppTranslationEvent: IncomingPort<IncomingEvent>;
  recieveAppTranslationEvent: OutgoingPort<OutgoingEvent>;
}

interface SetupParams {
  profile: Profile | null;
}

export function setup(ports: Ports, { profile }: SetupParams): void {
  const loadTranslation = async (lang: string): Promise<void> => {
    if (lang === "en-GB") {
      ports.recieveAppTranslationEvent.send({
        type: "RecievedTranslation",
        translation: enGB,
      });
      return;
    }

    try {
      const file = await import(`../translations/${lang}.json`).then(
        (mod) => mod.default
      );

      ports.recieveAppTranslationEvent.send({
        type: "RecievedTranslation",
        translation: merge({}, enGB, file),
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);

      ports.recieveAppTranslationEvent.send({
        type: "FailedToFetch",
        error: message,
      });
    }
  };

  if (profile && profile.preference.version === "2") {
    loadTranslation(profile.preference.language);
  }

  ports.sendAppTranslationEvent.subscribe((ev) => {
    switch (ev.type) {
      case "RequestTranslation": {
        loadTranslation(ev.lang);
        return;
      }
    }
  });
}
