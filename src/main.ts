import { Elm } from "./App/App.elm";
import type { GameServer } from "./App/Profile";
import * as Profile from "./App/Profile";
import * as WakeLock from "./Browser/Extra/WakeLock";
import * as Notifications from "./Browser/Extra/Notifications";
import * as Vibration from "./Browser/Extra/Vibration";
import * as Translation from "./App/Translation";
import servers from "./servers.json";
import enTranslation from "./translations/en-GB.json";
import timerPresets from "./timerPresets.json";

import aboutCss from "./App/Views/About.module.css";
import configCss from "./App/Views/Config.module.css";
import layoutCss from "./App/Views/Layout.module.css";
import randomEventCss from "./App/Views/RandomEventCounter.module.css";
import notFoundCss from "./App/Views/NotFound.module.css";
import newTimerCss from "./App/Views/NewTimer.module.css";
import timerCss from "./App/Views/Timer.module.css";
import timerPresetsCss from "./App/Views/TimerPresets.module.css";

import "./Adw";
import "./RadixIcons";

declare global {
  interface ImportMeta {
    // https://vitejs.dev/guide/env-and-mode.html
    env: {
      MODE: string;
      PACKAGE_INFO: unknown;
      BASE_URL: string;
    };
  }
}

if ("serviceWorker" in navigator) {
  const url = new URL("sw.js", location.href);

  navigator.serviceWorker.register(url).catch((err) => {
    console.group("Failed to register ServiceWorker");
    console.info("worker file: " + url.href);
    console.error(err);
    console.groupEnd();
  });
}

async function main(): Promise<void> {
  const profile = await Profile.load();

  if (profile) {
    document.documentElement.setAttribute("data-adw-theme", profile.theme);
  }

  const app = Elm.App.App.init<{
    cssModules: Record<string, Record<string, string>>;
    servers: readonly GameServer[];
    packageInfo: unknown;
    mode: string;
    profile: Profile.Profile | null;
    vibrationApi: boolean;
    translation: unknown;
    timerPresets: ReadonlyArray<{
      name: { default: string };
      duration:
        | { day?: number; hour?: number; minute?: number; second?: number }
        | number;
    }>;
  }>({
    flags: {
      cssModules: {
        "Views.Timer": timerCss,
        "Views.NewTimer": newTimerCss,
        "Views.RandomEventCounter": randomEventCss,
        "Views.Layout": layoutCss,
        "Views.NotFound": notFoundCss,
        "Views.About": aboutCss,
        "Views.Config": configCss,
        "Views.TimerPresets": timerPresetsCss,
      },
      servers,
      packageInfo: import.meta.env.PACKAGE_INFO,
      mode: import.meta.env.MODE,
      profile,
      vibrationApi: "vibrate" in navigator,
      translation: enTranslation,
      timerPresets,
    },
  });

  Notifications.setup(app.ports);
  Profile.setup(app.ports);
  WakeLock.setup(app.ports);
  Vibration.setup(app.ports);
  Translation.setup(app.ports, { profile });
}

main();
