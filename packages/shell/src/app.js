import { loadRemoteContainer } from "@genshin-utils/module-federation";

import { ShellLoading } from "./shell-loading";
import { Elm } from "./App.elm";

import "@genshin-utils/styles";
import "./styles.css";

const remotes = {
  appProfile: {
    name: "app_profile",
    entry: process.env.APP_PROFILE_HOST + "/mfre.js",
  },
  appRandomEventCounter: {
    name: "app_random_event_counter",
    entry: process.env.APP_RANDOM_EVENT_COUNTER_HOST + "/mfre.js",
  },
};

/**
 * Holds references for loaded remote containers.
 */
const remoteContainerRegistry = new Map();

async function getRemoteContainer(remote) {
  const loaded = remoteContainerRegistry.get(remote.name);

  if (loaded) {
    return loaded;
  }

  const container = await loadRemoteContainer(remote.entry, remote.name);

  remoteContainerRegistry.set(remote.name, container);

  return container;
}

class RemoteRuntimeError extends Error {
  get errorType() {
    return "remote_runtime";
  }
}

async function observeProfile(callback) {
  const container = await getRemoteContainer(remotes.appProfile);

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
      const container = await getRemoteContainer(remotes.appProfile);

      const { AppProfile } = await container.getModule("app");

      customElements.define(tagName, AppProfile);
      return;
    }
    case "app-random-event-counter": {
      const container = await getRemoteContainer(remotes.appRandomEventCounter);

      const { AppRandomEventCounter } = await container.getModule("app");

      customElements.define(tagName, AppRandomEventCounter);
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
