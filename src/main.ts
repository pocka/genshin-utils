import "sanitize.css";
import "./App/App.css";

import { Elm } from "./App/App.elm";
import type { GameServer } from "./App/Profile";
import * as Profile from "./App/Profile";
import * as WakeLock from "./App/WakeLock";
import * as Vibration from "./Vibration";
import servers from "./servers.json";

import configPageCss from "./App/Pages/Config.module.css";
import dashboardPageCss from "./App/Pages/Dashboard.module.css";
import notFoundPageCss from "./App/Pages/NotFound.module.css";
import randomEventCounterPageCss from "./App/Pages/RandomEventCounter.module.css";
import layoutCss from "./App/Layout.module.css";
import uiCommonCss from "./App/UI/Common.module.css";

declare global {
  interface ImportMeta {
    // https://vitejs.dev/guide/env-and-mode.html
    env: {
      MODE: string;
      PACKAGE_INFO: unknown;
    };
  }
}

async function main(): Promise<void> {
  const app = Elm.App.App.init<{
    cssModules: Record<string, Record<string, string>>;
    servers: readonly GameServer[];
    packageInfo: unknown;
    mode: string;
    profile: Profile.Profile | null;
    vibrationApi: boolean;
  }>({
    flags: {
      cssModules: {
        "App.Layout": layoutCss,
        "App.Pages.Config": configPageCss,
        "App.Pages.Dashboard": dashboardPageCss,
        "App.Pages.NotFound": notFoundPageCss,
        "App.Pages.RandomEventCounter": randomEventCounterPageCss,
        "App.UI.Common": uiCommonCss,
      },
      servers,
      packageInfo: import.meta.env.PACKAGE_INFO,
      mode: import.meta.env.MODE,
      profile: await Profile.load(),
      vibrationApi: "vibrate" in navigator,
    },
  });

  Profile.setup(app.ports);
  WakeLock.setup(app.ports);
  Vibration.setup(app.ports);
}

main();
