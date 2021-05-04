import * as React from "react";
import type { Profile } from "@genshin-utils/app-profile-types";

import { App as Pure } from "../components/App";
import { useCount } from "../hooks/useCount";

export interface AppProps {
  profile: Profile;
}

export const App = ({ profile }: AppProps) => {
  const { state, setRemains } = useCount(profile);

  return <Pure state={state} onChangeRemains={setRemains} />;
};
