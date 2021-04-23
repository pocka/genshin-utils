import dialogPolyfill from "dialog-polyfill";
import * as React from "react";
import { FC, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledDialog = styled.dialog`
  position: fixed;
  padding: 0;
  border: 0 none;
  max-width: 90%;
  max-height: 90%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  background-color: var(--theme-bg);
  border-radius: 0.4rem;
  box-shadow: 0 0 0.8rem #0003;
  color: var(--bg);
  overflow: auto;

  &::backdrop,
  & + .backdrop {
    background-color: #00000080;
  }

  // the dialog will be closed one cycle after children is hidden
  // this flag prevents flashing empty dialog
  &[data-opened="false"] {
    display: none;
  }
`;

const Contents = styled.div`
  padding: 2.4rem;
`;

export interface ModalDialogProps {
  className?: string;

  opened?: boolean;

  /**
   * Whether to emit "close" event when a user clicked the backdrop.
   */
  closeOnBackdropClick?: boolean;

  onClose?(): void;
}

export const ModalDialog: FC<ModalDialogProps> = ({
  children,
  opened = false,
  closeOnBackdropClick = true,
  onClose,
  ...rest
}) => {
  const ref = useRef<HTMLDialogElement>(null);

  // Cleanup
  useEffect(() => {
    const el = ref.current;

    return () => {
      if (el?.open) {
        el.close();
      }
    };
  }, []);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    dialogPolyfill.registerDialog(ref.current);
  }, [ref.current]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const listener = (ev: Event) => {
      ev.preventDefault();
      onClose?.();
    };

    ref.current.addEventListener("cancel", listener);

    return () => ref.current?.removeEventListener("cancel", listener);
  }, [ref.current, onClose]);

  useEffect(() => {
    if (opened) {
      if (!ref.current?.open) {
        ref.current?.showModal();
      }
    } else if (ref.current?.open) {
      ref.current?.close();
    }
  }, [opened, ref.current]);

  return (
    <StyledDialog
      ref={ref}
      data-opened={String(opened)}
      onClick={() => closeOnBackdropClick && onClose?.()}
      {...rest}
    >
      <Contents
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        {opened && children}
      </Contents>
    </StyledDialog>
  );
};
