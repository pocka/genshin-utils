import * as React from "react";
import styled, { keyframes } from "styled-components";

import { AnemoSlime } from "./AnemoSlime";

const float = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-15%);
  }
`;

const RotatingAnemoSlime = styled(AnemoSlime)`
  width: 80%;
  max-width: 16rem;

  animation: 1.5s ${float} infinite both alternate ease-in-out;
`;

const LoadingText = styled.p`
  font-size: 4rem;
  margin-block-start: 4rem;
  margin-inline-start: 1ch;

  font-weight: bold;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.4rem 0;
`;

export interface LoadingScreenProps {
  className?: string;
}

export const LoadingScreen = (props: LoadingScreenProps) => {
  return (
    <LoadingContainer {...props}>
      <RotatingAnemoSlime role="img" aria-label="A floating anemo slime" />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};
