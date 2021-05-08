import { loadRemoteContainer } from "@genshin-utils/module-federation";
import { Remotes } from "@genshin-utils/module-federation/remotes";

import { ShellLoading } from "./shell-loading";
import { Elm } from "./App.elm";

import "@genshin-utils/styles";
import "./styles.css";
import "./icons/index.font";

/**
 * Holds references for loaded remote containers.
 */
const remoteContainerRegistry = new Map();

async function getRemoteContainer(remote) {
  const loaded = remoteContainerRegistry.get(remote);

  if (loaded) {
    return loaded;
  }

  const container = await loadRemoteContainer(remote);

  remoteContainerRegistry.set(remote, container);

  return container;
}

class RemoteRuntimeError extends Error {
  get errorType() {
    return "remote_runtime";
  }
}

async function observeProfile(callback) {
  const container = await getRemoteContainer(Remotes.AppProfile);

  const { observeCurrentProfile } = await container.getModule("observer");

  try {
    return observeCurrentProfile(callback);
  } catch (err) {
    throw new RemoteRuntimeError();
  }
}

async function loadCustomElement(tagName) {
  if (customElements.get(tagName)) {
    return;
  }

  switch (tagName) {
    case "app-profile": {
      const container = await getRemoteContainer(Remotes.AppProfile);

      const { AppProfile } = await container.getModule("app");

      customElements.define(tagName, AppProfile);
      return;
    }
    case "app-random-event-counter": {
      const container = await getRemoteContainer(Remotes.AppRandomEventCounter);

      const { AppRandomEventCounter } = await container.getModule("app");

      customElements.define(tagName, AppRandomEventCounter);
      return;
    }
    case "app-resin-meter": {
      const container = await getRemoteContainer(Remotes.AppResinMeter);

      const { AppResinMeter } = await container.getModule("app");

      customElements.define(tagName, AppResinMeter);
      return;
    }
  }
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function main() {
  customElements.define("shell-loading", ShellLoading);

  const app = Elm.App.init({
    flags: {
      repositoryUrl: process.env.REPOSITORY_URL,
    },
  });

  app.ports.wakeLockAvailability.send("wakeLock" in navigator);

  let wakeLock = null;

  const releaseWakeLock = async () => {
    await wakeLock.release();
    wakeLock = null;
    app.ports.updateWakeLockStatus.send(false);
  };

  app.ports.requestWakeLock.subscribe(async (lock) => {
    try {
      if (lock) {
        wakeLock = await navigator.wakeLock.request("screen");
        wakeLock.addEventListener("release", () => {
          releaseWakeLock();
        });

        app.ports.updateWakeLockStatus.send(true);
      } else if (wakeLock) {
        await releaseWakeLock();
      }
    } catch (err) {
      console.warn("Failed to change Wake Lock status", err);
    }
  });

  let unobserve = null;

  const observe = async () => {
    if (unobserve) {
      unobserve();
    }

    const forceLoading = wait(1000);

    try {
      unobserve = await observeProfile((profile) => {
        forceLoading.then(() => {
          app.ports.profileObserver.send(profile);
        });
      });
    } catch (err) {
      await forceLoading;

      app.ports.profileObserver.send({
        error:
          err instanceof RemoteRuntimeError
            ? err.errorType
            : "no_remote_available",
      });
    }
  };

  observe();

  app.ports.retryProfileLoad.subscribe(() => {
    observe();
  });

  app.ports.loadCustomElement.subscribe((tagName) => {
    loadCustomElement(tagName);
  });
}

main();
