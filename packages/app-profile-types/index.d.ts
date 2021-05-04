export interface GenshinServer {
  /**
   * e.g. Europe
   */
  name: string;

  /**
   * Timezone offset from UTC.
   */
  tzOffset: number;
}

export interface Profile {
  /**
   * Identifies the profile among profiles saved in storage.
   */
  id: string;

  /**
   * Is the user using the profile?
   */
  isCurrent: boolean;

  /**
   * Name given by a user, for labelling purpose.
   */
  name: string;

  /**
   * Which server to use as a base for time-related features?
   */
  server: GenshinServer;

  /**
   * Primary color to use in our UI.
   */
  color?: string;
}

export type ProfilesObserver = (profiles: readonly Profile[]) => void;
export type CurrentProfileObserver = (profile: Profile | null) => void;

export type Unobserve = () => void;

export interface ObserverModule {
  /**
   * Observe profile changes.
   *
   * @param callback Callback for profile changes.
   * A callback will be called with profile or null (if a user has no profiles).
   * @param runInitial Whether to call provided callback on first time.
   * @returns A function to unobserve.
   */
  observeProfiles(
    callback: ProfilesObserver,
    runInitial: boolean = true
  ): Unobserve;

  /**
   * Observe overall profiles.
   *
   * @param callback Callback for profiles changes.
   * @param runInitial Whether to call provided callback on first time.
   * @returns A function to unobserve.
   */
  observeCurrentProfile(
    callback: CurrentProfileObserver,
    runInitial: boolean = true
  ): Unobserve;
}

export class AppProfile extends HTMLElement {}

export interface AppModule {
  AppProfile: typeof AppProfile;
}

export class Store {
  constructor(profileId: string, appId: string);
  save<T>(key: string, value: T): Promise<T>;
  load<T>(key: string): Promise<T | null>;
}

export interface StoreModule {
  Store: typeof Store;
}
