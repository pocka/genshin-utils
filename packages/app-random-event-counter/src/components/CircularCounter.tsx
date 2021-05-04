import * as React from "react";
import styled from "styled-components";

const Container = styled.button`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: auto;

  background-color: var(--theme-bg-sub);
  border-radius: 50%;
  overflow: hidden;

  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const SquareKeeper = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
`;

const Ring = styled.circle`
  fill: none;
  stroke: var(--theme-primary);

  transition: stroke-dashoffset 0.2s 0.1s ease, stroke 0.2s ease;

  &[data-count="0"] {
    stroke: var(--theme-bg-sub);
    transition: stroke-dashoffset 0.2s ease, stroke 0.2s 0.1s ease;
  }
`;

const RingBg = styled(Ring)`
  stroke: var(--theme-bg-sub);

  &[data-max="max"] {
    stroke: var(--theme-primary);
    transition: stroke 0.1s 0.16s linear;
  }
`;

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transform: rotate(-90deg);
`;

const Text = styled.span`
  display: block;
  position: absolute;
  max-width: 100%;
  top: 50%;
  left: 50%;

  text-align: center;
  user-select: none;

  transform: translate(-50%, -50%);
`;

const Count = styled.span`
  display: block;
  font-size: 5em;
  margin: 0.1em 0;

  font-weight: bold;
`;

const Instruction = styled.small`
  font-size: 0.8em;
  white-space: nowrap;
`;

const ClickText = styled.span`
  &::before {
    content: "Tap";
  }

  @media (hover: hover) {
    &::before {
      content: "Click";
    }
  }
`;

export interface CircularCounterProps {
  className?: string;
  count: number;
  max: number;

  onClick?(): void;
}

export const CircularCounter = ({
  count,
  max,
  onClick,
  ...rest
}: CircularCounterProps) => {
  return (
    <Container {...rest} onClick={() => onClick?.()}>
      <SquareKeeper />
      <Svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <RingBg
          cx="50"
          cy="50"
          r="47.5"
          strokeWidth="5"
          data-max={count === max ? "max" : ""}
        />
        <Ring
          cx="50"
          cy="50"
          r="47.5"
          pathLength="1000"
          strokeWidth="5"
          strokeDasharray="1000"
          strokeDashoffset={1000 - 1000 * (count / max)}
          data-count={count}
        />
      </Svg>
      <Text>
        Reward remains
        <Count>{count}</Count>
        <Instruction>
          (<ClickText /> to consume)
        </Instruction>
      </Text>
    </Container>
  );
};
