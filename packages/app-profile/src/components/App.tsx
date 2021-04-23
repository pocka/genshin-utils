import * as React from "react";

import { LoadingScreen } from "./LoadingScreen";
import { NoProfiles } from "./NoProfiles";
import { PageLayout } from "./PageLayout";
import { ProfileList as ProfileListPage } from "./ProfileList";
import {
  Profile,
  ProfileSetter,
  ProfileList,
  ProfileListStates,
} from "../states/ProfileList";

export interface AppProps {
  state: ProfileList;

  onAppend(profile: ProfileSetter): void;
  onUpdate(list: Profile[]): void;
}

const Page = ({ state, onAppend, onUpdate }: AppProps) => {
  switch (state.state) {
    case ProfileListStates.Loading:
      return <LoadingScreen />;
    case ProfileListStates.LoadFailed:
      return <p>Failed to load profile</p>;
    default:
      return state.list.length > 0 ? (
        <ProfileListPage
          list={state.list}
          mutating={state.state === ProfileListStates.Mutating}
          onCreate={onAppend}
          onChangeCurrent={(next) =>
            onUpdate(
              state.list.map((profile) => ({
                ...profile,
                isCurrent: profile.id === next.id,
              }))
            )
          }
          onDelete={(target) =>
            onUpdate(
              state.list
                .filter((profile) => profile.id !== target.id)
                .map((profile, i) =>
                  target.isCurrent && i === 0
                    ? { ...profile, isCurrent: true }
                    : profile
                )
            )
          }
          onEdit={(update) =>
            onUpdate(
              state.list.map((profile) =>
                profile.id === update.id ? update : profile
              )
            )
          }
        />
      ) : (
        <NoProfiles onAppend={onAppend} />
      );
  }
};

export const App = (props: AppProps) => {
  return (
    <PageLayout>
      <Page {...props} />
    </PageLayout>
  );
};
