import * as React from "react";
import { FC } from "react";
import { RiLoader3Fill } from "react-icons/ri";
import styled, { keyframes } from "styled-components";

const LoadingIndicator = styled.i`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const spin = keyframes`
  from {
    transfrom: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(RiLoader3Fill)`
  font-size: 1.1em;

  animation: 1s ease infinite both ${spin};
`;

const Label = styled.span`
  [data-icon="false"] > & > svg {
    vertical-align: middle;
    transform: translateY(-10%);
  }

  [data-icon="true"] > & {
    display: flex;
  }
`;

const Component = styled.button`
  --hover-color: var(--color-emerald);
  --hover-fg: var(--color-midnight-blue);
  --active-color: var(--color-nephritis);
  --active-fg: var(--color-midnight-blue);

  &[data-variant="normal"] {
    --hover-color: var(--theme-fg);
    --hover-fg: var(--theme-bg);
    --active-color: var(--theme-fg-sub);
    --active-fg: var(--theme-bg);
  }

  &[data-variant="danger"] {
    --hover-color: var(--color-alizarin);
    --hover-fg: var(--theme-bg);
    --active-color: var(--color-pomegranate);
    --active-fg: var(--theme-bg);
  }

  position: relative;
  display: inline-block;
  padding: 0.5em 1em;
  border: 0.2rem solid var(--hover-color);

  border-radius: 1.5em;
  text-align: center;

  transition: transform 0.1s ease;

  &[data-icon="true"] {
    padding: 0.5em;
    border-radius: 50%;
  }

  &:focus {
    text-decoration: underline;
    color: Highlight;
  }

  &:hover {
    background-color: var(--hover-color);
    border-color: var(--hover-color);
    color: var(--hover-fg);
  }

  &:active {
    background-color: var(--active-color);
    border-color: var(--active-color);
    color: var(--active-fg);

    transform: scale(0.98);
  }

  &:not(:disabled)[data-loading="loading"] {
    opacity: 0.8;
    pointer-events: none;

    & > ${Label} {
      visibility: hidden;
    }

    & > ${LoadingIndicator} {
      display: flex;
    }
  }

  &:disabled {
    border-color: var(--theme-fg-sub);
    color: var(--theme-fg-sub);
    pointer-events: none;

    opacity: 0.8;
  }
`;

export interface ButtonProps {
  className?: string;

  type?: "button" | "submit";
  title?: string;
  loadingTitle?: string;
  disabled?: boolean;

  /**
   * Whether to disable button interaction but keep the button focusable and
   * indicate loading state.
   */
  loading?: boolean;

  /**
   * Color variant.
   */
  variant?: "primary" | "normal" | "danger";

  /**
   * Render as circle button and centerize the children.
   */
  icon?: boolean;

  onClick?(): void;
}

export const Button: FC<ButtonProps> = ({
  children,
  title,
  loadingTitle = "Loading",
  loading,
  variant = "normal",
  icon,
  onClick,
  ...rest
}) => {
  return (
    <Component
      data-loading={loading ? "loading" : null}
      data-variant={variant}
      data-icon={icon ? "true" : "false"}
      title={loading ? loadingTitle : title}
      aria-busy={loading}
      onClick={() => {
        if (!loading) {
          onClick?.();
        }
      }}
      {...rest}
    >
      <Label>{children}</Label>
      <LoadingIndicator>
        <Spinner />
      </LoadingIndicator>
    </Component>
  );
};
