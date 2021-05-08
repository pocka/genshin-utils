import type { Store, StoreModule } from "@genshin-utils/app-profile-types";
import { loadRemoteContainer } from "@genshin-utils/module-federation";
import { Remotes } from "@genshin-utils/module-federation/remotes";
import { ReactiveController, ReactiveControllerHost } from "lit";

import { APP_ID } from "../constants";

export class StoreController implements ReactiveController {
  host: ReactiveControllerHost;

  #stores: Record<string, Store> = {};
  #Store: typeof Store | null = null;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    this.host.addController(this);
  }

  async store(storeName: string): Promise<Store> {
    const cache = this.#stores[storeName];

    if (cache) {
      return Promise.resolve(cache);
    }

    if (!this.#Store) {
      return new Promise((resolve, reject) => {
        let checkCount = 0;

        const interval = setInterval(() => {
          if (this.#Store) {
            resolve(this.store(storeName));
            clearInterval(interval);
            return;
          }

          if (checkCount++ >= 100) {
            reject(new Error("Timeout"));
            return;
          }
        }, 300);
      });
    }

    const store = new this.#Store(storeName, APP_ID);
    this.#stores[storeName] = store;
    return store;
  }

  async hostConnected() {
    const container = await loadRemoteContainer(Remotes.AppProfile);

    const { Store } = await container.getModule<StoreModule>("store");

    this.#Store = Store;
  }

  hostDisconnected() {
    this.#Store = null;
    this.#stores = {};
  }
}
