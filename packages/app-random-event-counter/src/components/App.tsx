import * as React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import styled from "styled-components";

import { CircularCounter } from "./CircularCounter";
import { REMAINS_MAX } from "../constants";
import { CountState } from "../states/CountState";

const AppWrapper = styled.div`
  padding: 3.2rem;
`;

const RevertButton = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  margin: auto;
  margin-block-start: 16rem;
  padding: 0.8rem 1.6rem;

  background-color: var(--theme-fg);
  border: 0.2rem solid var(--theme-bg);
  border-radius: 0.4rem;
  color: var(--theme-bg);
  overflow: hidden;

  &:hover:not(:disabled) {
    box-shadow: 0 0 0 0.15rem var(--theme-fg);
  }
  &:active:not(:disabled) {
    opacity: 0.8;
    transform: scale(0.98);
  }
  &:focus {
    box-shadow: 0 0 0 0.15rem Highlight;
    outline: none;
  }
  &:disabled {
    background-color: var(--theme-fg-sub);
    color: var(--theme-bg-sub);
  }
`;

const UndoIcon = styled(RiArrowGoBackFill)`
  margin-inline-end: 0.3em;
  font-size: 0.9em;
  vertical-align: middle;
`;

const Loading = styled(({ className, ...props }) => (
  <shell-loading class={className} {...props} />
))`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export interface AppProps {
  state: CountState;

  onChangeRemains(remains: number): void;
}

export const App = ({ state, onChangeRemains }: AppProps) => {
  switch (state.type) {
    case "failed":
      return <p>Failed</p>;
    case "loading":
      return <Loading />;
    case "loaded":
      return (
        <AppWrapper>
          <CircularCounter
            count={state.data.remains}
            max={REMAINS_MAX}
            onClick={() => onChangeRemains(state.data.remains - 1)}
          />
          <RevertButton
            disabled={state.data.remains >= REMAINS_MAX}
            onClick={() => onChangeRemains(state.data.remains + 1)}
          >
            <UndoIcon role="img" aria-label="Go back icon" />
            <span>Undo (add 1)</span>
          </RevertButton>
        </AppWrapper>
      );
  }
};
