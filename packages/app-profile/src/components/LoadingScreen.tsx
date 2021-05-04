import * as React from "react";
import styled from "styled-components";

const Loading = styled(({ className, ...props }) => (
  <shell-loading class={className} {...props} />
))`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export interface LoadingScreenProps {
  className?: string;
}

export const LoadingScreen = (props: LoadingScreenProps) => {
  return <Loading {...props} />;
};
