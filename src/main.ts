import "./App/App.css";

import { Elm } from "./App/App.elm";
import type { GameServer } from "./App/Profile";
import * as Notifications from "./Notifications";
import * as Profile from "./App/Profile";
import * as WakeLock from "./App/WakeLock";
import * as Vibration from "./Vibration";
import * as Translation from "./App/Translation";
import servers from "./servers.json";
import enTranslation from "./translations/en-GB.json";

import configPageCss from "./App/Pages/Config.module.css";
import dashboardPageCss from "./App/Pages/Dashboard.module.css";
import notFoundPageCss from "./App/Pages/NotFound.module.css";
import randomEventCounterPageCss from "./App/Pages/RandomEventCounter.module.css";
import newTimerPageCss from "./App/Pages/NewTimer.module.css";
import timerPageCss from "./App/Pages/Timer.module.css";
import layoutCss from "./App/Layout.module.css";
import uiCommonCss from "./App/UI/Common.module.css";

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

  const app = Elm.App.App.init<{
    cssModules: Record<string, Record<string, string>>;
    servers: readonly GameServer[];
    packageInfo: unknown;
    mode: string;
    profile: Profile.Profile | null;
    vibrationApi: boolean;
    translation: unknown;
  }>({
    flags: {
      cssModules: {
        "App.Layout": layoutCss,
        "App.Pages.Config": configPageCss,
        "App.Pages.Dashboard": dashboardPageCss,
        "App.Pages.NotFound": notFoundPageCss,
        "App.Pages.RandomEventCounter": randomEventCounterPageCss,
        "App.Pages.Timer": timerPageCss,
        "App.Pages.NewTimer": newTimerPageCss,
        "App.UI.Common": uiCommonCss,
      },
      servers,
      packageInfo: import.meta.env.PACKAGE_INFO,
      mode: import.meta.env.MODE,
      profile,
      vibrationApi: "vibrate" in navigator,
      translation: enTranslation,
    },
  });

  Notifications.setup(app.ports);
  Profile.setup(app.ports);
  WakeLock.setup(app.ports);
  Vibration.setup(app.ports);
  Translation.setup(app.ports, { profile });
}

main();
