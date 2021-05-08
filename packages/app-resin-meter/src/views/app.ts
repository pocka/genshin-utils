import { differenceInSeconds } from "date-fns";
import { css, html } from "lit";

import { RESIN_HARD_MAX, RESIN_SOFT_MAX, RESIN_INC_WINDOW } from "../constants";
import { Snapshot, SnapshotState } from "../types";
import * as layout from "./layout";
import * as resinImage from "./resinImage";

function estimateCurrentResin(
  lastSnapshot: Snapshot | null,
  currentTime: Date
): number {
  if (!lastSnapshot) {
    return RESIN_SOFT_MAX;
  }

  const doesRegenerate = lastSnapshot.remains < RESIN_SOFT_MAX;

  if (!doesRegenerate) {
    return lastSnapshot.remains;
  }

  const diff = differenceInSeconds(currentTime, lastSnapshot.savedAt);

  return Math.max(
    0,
    Math.min(
      RESIN_SOFT_MAX,
      lastSnapshot.remains + Math.floor(diff / RESIN_INC_WINDOW)
    )
  );
}

export interface AppProps {
  currentTime: Date;
  lastSnapshot: SnapshotState;
  snapshotSaveError: Error | null;

  onSave(snapshot: Snapshot): void;
}

export const view = ({
  currentTime,
  lastSnapshot,
  snapshotSaveError,
  onSave,
}: AppProps) => {
  if (lastSnapshot.type === "loading") {
    return html`<shell-loading />`;
  }

  if (lastSnapshot.type === "failed") {
    return html`<p>
      Failed to load from store: ${lastSnapshot.reason.message}
    </p>`;
  }

  const add = (amount: number) => () => {
    onSave({
      remains: Math.max(
        0,
        Math.min(
          RESIN_HARD_MAX,
          (lastSnapshot.value?.remains ?? RESIN_SOFT_MAX) + amount
        )
      ),
      savedAt: new Date(),
    });
  };

  const addSoftMax = () => {
    onSave({
      remains: Math.max(
        RESIN_SOFT_MAX,
        lastSnapshot.value?.remains ?? RESIN_SOFT_MAX
      ),
      savedAt: new Date(),
    });
  };

  const remains = estimateCurrentResin(lastSnapshot.value, currentTime);

  return layout.view(html`
    ${snapshotSaveError ? html` <p>${snapshotSaveError.message}</p> ` : null}
    <div class="app-head">
      <p class="app-head-info">
        <span>Current Resin</span>
        <span class="app-current-resin">${remains}</span>
      </p>
      ${resinImage.view(Math.min(100, (remains / RESIN_SOFT_MAX) * 100))}
    </div>
    <div class="app-buttons">
      <button class="app-button app-button-circle" @click="${add(-10)}">
        <span>-10</span>
      </button>
      <button class="app-button app-button-circle" @click="${add(-20)}">
        <span>-20</span>
      </button>
      <button class="app-button app-button-circle" @click="${add(-30)}">
        <span>-30</span>
      </button>
      <button class="app-button app-button-circle" @click="${add(-40)}">
        <span>-40</span>
      </button>
      <button class="app-button app-button-circle" @click="${add(-60)}">
        <span>-60</span>
      </button>
      <button class="app-button" @click="${add(+60)}">
        <span>+60</span>
      </button>
      <button class="app-button" @click="${addSoftMax}">
        <span>MAX</span>
      </button>
    </div>
  `);
};

export const styles = [
  ...layout.styles,
  ...resinImage.styles,
  css`
    shell-loading {
      position: fixed;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);
    }

    .app-head {
      position: relative;
      width: 50vh;
      max-width: min(100%, 56rem);
      padding: 5.6rem;
    }

    .app-head-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      font-size: max(1.2rem, min(3vh, 1.8rem));
      position: absolute;
      top: 50%;
      left: 50%;

      text-shadow: 0 0 0.4em var(--theme-bg-sub);

      transform: translate(-50%, -50%);
    }

    .app-current-resin {
      font-size: 2.2em;
      font-weight: bold;
    }

    .app-buttons {
      --grid-size: 6.4rem;
      --grid-max-columns: 5;
      --grid-gap: 2.4rem;
      --padding: 0.8rem;

      display: grid;
      grid-template-columns: repeat(auto-fill, var(--grid-size));
      grid-auto-rows: var(--grid-size);
      gap: var(--grid-gap);
      justify-content: center;
      padding: var(--padding);
      width: 100%;
      max-width: calc(
        var(--grid-size) * var(--grid-max-columns) + var(--grid-gap) *
          (var(--grid-max-columns) - 1) + var(--padding) * 2
      );
      margin: 0 auto;
    }

    .app-button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0.2rem solid var(--theme-fg);
      font-size: 2rem;
      letter-spacing: -0.05em;

      border-radius: 0.2rem;
      color: var(--theme-fg);
      font-weight: bold;

      transition: transform 0.15s ease-out;
    }
    .app-button:focus,
    .app-button:hover {
      border-color: var(--theme-primary);
      color: var(--theme-primary);
    }
    .app-button:active {
      transform: scale(0.98);
    }

    .app-button-circle {
      border-radius: 50%;
    }
  `,
];
