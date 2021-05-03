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

export interface ProfileSetter {
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

export interface Profile extends ProfileSetter {
  /**
   * Identifies the profile among profiles saved in storage.
   */
  id: string;

  /**
   * Is the user using the profile?
   */
  isCurrent: boolean;
}

export enum ProfileListStates {
  Loading = 0,
  LoadFailed,
  Loaded,
  Mutating,
  MutateFailed,
}

export interface Loading {
  readonly state: ProfileListStates.Loading;
}

export interface LoadFailed {
  readonly state: ProfileListStates.LoadFailed;
  readonly reason: Error;
}

export interface Loaded {
  readonly state: ProfileListStates.Loaded;
  readonly list: readonly Profile[];
}

export interface Mutating {
  readonly state: ProfileListStates.Mutating;
  readonly list: readonly Profile[];
}

export interface MutateFailed {
  readonly state: ProfileListStates.MutateFailed;
  readonly list: readonly Profile[];
  readonly reason: Error;
}

export type ProfileList =
  | Loading
  | LoadFailed
  | Loaded
  | Mutating
  | MutateFailed;

export const loading: Loading = {
  state: ProfileListStates.Loading,
};

export const loadFailed = (reason: Error): LoadFailed => ({
  state: ProfileListStates.LoadFailed,
  reason,
});

export const loaded = (list: readonly Profile[]): Loaded => ({
  state: ProfileListStates.Loaded,
  list,
});

export const mutating = (list: readonly Profile[]): Mutating => ({
  state: ProfileListStates.Mutating,
  list,
});

export const mutateFailed = (
  list: readonly Profile[],
  reason: Error
): MutateFailed => ({
  state: ProfileListStates.MutateFailed,
  list,
  reason,
});
