import type { Profile } from "@genshin-utils/app-profile-types";
import { LitElement } from "lit";
import { property, state } from "lit/decorators.js";

import { LAST_SNAPSHOT_TABLE_ID } from "../constants";
import { ClockController, StoreController } from "../controllers";
import * as app from "../views/app";
import { Snapshot, SnapshotState } from "../types";

export class AppResinMeter extends LitElement {
  @property({
    hasChanged(prev, next) {
      return JSON.stringify(prev || null) !== JSON.stringify(next || null);
    },
    type: Object,
  })
  profile?: Profile;

  @state()
  protected __lastSnapshot: SnapshotState = { type: "loading" };

  @state()
  protected __snapshotSaveError: Error | null = null;

  #clock = new ClockController(this);
  #store = new StoreController(this);

  static styles = app.styles;

  constructor() {
    super();
  }

  willUpdate(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("profile") && this.profile) {
      this.__lastSnapshot = { type: "loading" };
      this.#store
        .store(this.profile.id)
        .then((store) => store.load<Snapshot>(LAST_SNAPSHOT_TABLE_ID))
        .then((snapshot) => {
          this.__lastSnapshot = {
            type: "loaded",
            value: snapshot,
          };
        })
        .catch((err) => {
          this.__lastSnapshot = {
            type: "failed",
            reason: err,
          };
        });
    }
  }

  render() {
    return app.view({
      currentTime: this.#clock.value,
      lastSnapshot: this.__lastSnapshot,
      snapshotSaveError: this.__snapshotSaveError,
      onSave: this.#saveSnapshot,
    });
  }

  #saveSnapshot = async (snapshot: Snapshot) => {
    this.__lastSnapshot = {
      type: "loaded",
      value: snapshot,
    };

    this.__snapshotSaveError = null;

    try {
      if (!this.profile) {
        throw new Error("No profiles found. Skipped saving.");
      }

      const store = await this.#store.store(this.profile.id);
      await store.save<Snapshot>(LAST_SNAPSHOT_TABLE_ID, snapshot);
    } catch (err) {
      this.__snapshotSaveError = err;
    }
  };
}
