import * as localforage from "localforage";
import { Profile } from "./states/ProfileList";

const PROFILE_INDEX_KEY = "gu_profile_v1";

export async function getProfiles(): Promise<readonly Profile[]> {
  return (await localforage.getItem<Profile[]>(PROFILE_INDEX_KEY)) || [];
}

export async function setProfiles(
  profiles: readonly Profile[]
): Promise<readonly Profile[]> {
  return (
    (await localforage.setItem<readonly Profile[]>(
      PROFILE_INDEX_KEY,
      profiles
    )) || []
  );
}
