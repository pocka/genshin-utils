export interface RewardRemains {
  remains: number;

  /**
   * ISO 8601 datetime string.
   */
  loggedAt: string;
}

export interface LoadingState {
  type: "loading";
}
export interface LoadedState {
  type: "loaded";
  data: RewardRemains;
}
export interface LoadFailedState {
  type: "failed";
  error: Error;
}
export type CountState = LoadingState | LoadedState | LoadFailedState;
