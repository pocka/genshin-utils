import { Profile } from "./states/ProfileList";
import { getProfiles } from "./store";

export type Unobserve = () => void;

const OBSERVER_KEY = "__gu_observers";

export type ProfilesObserver = (profiles: readonly Profile[]) => void;
export type CurrentProfileObserver = (profile: Profile | null) => void;

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

/**
 * Observe profile changes.
 *
 * @param callback Callback for profile changes.
 * A callback will be called with profile or null (if a user has no profiles).
 * @param runInitial Whether to call provided callback on first time.
 * @returns A function to unobserve.
 */
export function observeCurrentProfile(
  callback: CurrentProfileObserver,
  runInitial: boolean = true
): Unobserve {
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
}

/**
 * Observe overall profiles.
 *
 * @param callback Callback for profiles changes.
 * @param runInitial Whether to call provided callback on first time.
 * @returns A function to unobserve.
 */
export function observeProfiles(
  callback: ProfilesObserver,
  runInitial: boolean = true
): Unobserve {
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
}
