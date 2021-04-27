export interface RemoteContainer {
  getModule<T>(moduleName: string): Promise<T>;
  unloadRemoteEntry(): void;
}

/**
 * @param remoteEntryUrl A URL for the remote's entry script.
 * @param remoteName A name of the remote container.
 */
export function loadRemoteContainer(
  remoteName: string
): Promise<RemoteContainer>;
