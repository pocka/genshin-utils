import type {
  ProfilesObserver,
  CurrentProfileObserver,
  ObserverModule,
} from "@genshin-utils/app-profile-types";
import { getProfiles } from "./store";

const OBSERVER_KEY = "__gu_observers";

interface ObserverStore {
  currentProfile: CurrentProfileObserver[];
  profiles: ProfilesObserver[];
}

declare global {
  interface Window {
    [OBSERVER_KEY]?: ObserverStore;
  }
}

export function getObserverStore(): ObserverStore {
  if (!window[OBSERVER_KEY]) {
    window[OBSERVER_KEY] = {
      currentProfile: [],
      profiles: [],
    };
  }

  return window[OBSERVER_KEY]!;
}

export const observeCurrentProfile: ObserverModule["observeCurrentProfile"] = (
  callback,
  runInitial = true
) => {
  const store = getObserverStore();

  store.currentProfile.push(callback);

  if (runInitial) {
    getProfiles()
      .then((profiles) => {
        callback(profiles.find((p) => p.isCurrent) || null);
      })
      .catch((err) => {
        console.warn("Failed to retrieve profiles store", err);
      });
  }

  return () => {
    store.currentProfile = store.currentProfile.filter((c) => c !== callback);
  };
};

export const observeProfiles: ObserverModule["observeProfiles"] = (
  callback,
  runInitial = true
) => {
  const store = getObserverStore();

  store.profiles.push(callback);

  if (runInitial) {
    getProfiles()
      .then((profiles) => {
        callback(profiles);
      })
      .catch((err) => {
        console.warn("Failed to retrieve profiles store", err);
      });
  }

  return () => {
    store.profiles = store.profiles.filter((c) => c !== callback);
  };
};
