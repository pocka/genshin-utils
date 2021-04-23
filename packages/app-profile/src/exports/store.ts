import * as localforage from "localforage";

/**
 * Simple key-value store tied to the profile.
 */
export class Store {
  // LocalForage's TS typings leaking their types into global >:
  #instance: LocalForage;

  constructor(profileId: string, appId: string) {
    this.#instance = localforage.createInstance({
      name: profileId,
      version: 1.0,
      storeName: appId,
    });
  }

  save<T>(key: string, value: T): Promise<T> {
    return this.#instance.setItem(key, value);
  }

  load<T>(key: string): Promise<T | null> {
    return this.#instance.getItem(key);
  }
}

// Since Store class will be exported as a type and consumers can't
// import the class directly (then it'll be included as normal deps),
// consumers are unable to obtain the class' constructor type.
export type StoreConstructor = typeof Store;
