import * as React from "react";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import { App as Pure } from "../components/App";
import {
  Profile,
  ProfileList,
  ProfileListStates,
  ProfileSetter,
  loading,
  loadFailed,
  loaded,
  mutating,
  mutateFailed,
} from "../states/ProfileList";
import { getObserverStore, observeProfiles } from "../observer";
import { getProfiles, setProfiles } from "../store";

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export interface AppProps {
  onSelectProfile?(profile: Profile | null): void;
}

export const App = ({ onSelectProfile }: AppProps) => {
  const [state, setState] = useState<ProfileList>(loading);

  useEffect(() => {
    // Prevent loading-screen-flashing
    Promise.all([getProfiles(), wait(1000)])
      .then(([list]) => {
        setState(loaded(list));

        const current = list.find((p) => p.isCurrent);

        onSelectProfile?.(current || null);
      })
      .catch((err) => setState(loadFailed(err)));
  }, []);

  useEffect(() => {
    return observeProfiles((profiles) => {
      setState(loaded(profiles));
    }, false);
  }, []);

  const update = async (list: readonly Profile[]) => {
    if (
      state.state !== ProfileListStates.Loaded &&
      state.state !== ProfileListStates.MutateFailed
    ) {
      return;
    }

    const observerStore = getObserverStore();

    setState(mutating(state.list));

    const oldSelected = state.list.find((p) => p.isCurrent) || null;
    const newSelected = list.find((p) => p.isCurrent) || null;

    if (JSON.stringify(oldSelected) !== JSON.stringify(newSelected)) {
      onSelectProfile?.(newSelected);
      observerStore.currentProfile.forEach((cb) => {
        try {
          cb(newSelected);
        } catch (err) {
          console.warn(err);
        }
      });
    }

    try {
      const updatedList = await setProfiles(list);

      observerStore.profiles.forEach((cb) => {
        try {
          cb(updatedList);
        } catch (err) {
          console.warn(err);
        }
      });
      setState(loaded(updatedList));
    } catch (err) {
      setState(mutateFailed(state.list, err));
    }
  };

  const append = async (profile: ProfileSetter) => {
    if (
      state.state !== ProfileListStates.Loaded &&
      state.state !== ProfileListStates.MutateFailed
    ) {
      return;
    }

    return update([
      ...state.list.map((profile) => ({
        ...profile,
        isCurrent: false,
      })),
      {
        ...profile,
        id: uuid(),
        isCurrent: true,
      },
    ]);
  };

  return <Pure state={state} onAppend={append} onUpdate={update} />;
};
