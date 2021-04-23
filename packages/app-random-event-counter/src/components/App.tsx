import * as React from "react";

import { CircularCounter } from "./CircularCounter";
import { REMAINS_MAX } from "../constants";
import { CountState } from "../states/CountState";

export interface AppProps {
  state: CountState;

  onChangeRemains(remains: number): void;
}

export const App = ({ state, onChangeRemains }: AppProps) => {
  switch (state.type) {
    case "failed":
      return <p>Failed</p>;
    case "loading":
      return <p>Loading</p>;
    case "loaded":
      return (
        <div>
          <CircularCounter
            count={state.data.remains}
            max={REMAINS_MAX}
            onClick={() => onChangeRemains(state.data.remains - 1)}
          />
          <button onClick={() => onChangeRemains(state.data.remains + 1)}>
            +1
          </button>
        </div>
      );
  }
};
