# `@genshin-utils/app-profile-types`

Container API typings for [`@genshin-utils/app-profile`](../app-profile).

## Usage

```ts
import { Remotes } from "@genshin-utils/module-federation/remotes";
import type { ObserverModule } from "@genshin-utils/app-profile-types";

const container = await loadRemoteContainer(Remotes.AppProfile);

const { observeProfiles } = await container.getModule<ObserverModule>(
  "observer"
);
```
