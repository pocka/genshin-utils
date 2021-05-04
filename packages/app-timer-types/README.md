# `@genshin-utils/app-timer-types`

Container API typings for [`@genshin-utils/app-timer`](../app-timer).

## Usage

```ts
import { Remotes } from "@genshin-utils/module-federation/remotes";
import type { TimerModule } from "@genshin-utils/app-timer-types";

const container = await loadRemoteContainer(Remotes.AppTimer);

const { schedule } = await container.getModule<TimerModule>("timer");
```
