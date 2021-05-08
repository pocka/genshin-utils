export interface SnapshotLoaded {
  type: "loaded";
  value: Snapshot | null;
}

export interface SnapshotLoadFailed {
  type: "failed";
  reason: Error;
}

export interface SnapshotLoading {
  type: "loading";
}

export type SnapshotState =
  | SnapshotLoadFailed
  | SnapshotLoaded
  | SnapshotLoading;

export interface Snapshot {
  remains: number;
  savedAt: Date;
}
