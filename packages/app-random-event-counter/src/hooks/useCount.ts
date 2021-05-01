/**
 * @license
 * A small utility app to log random event rewards remains.
 * Copyright (C) 2021  Shota Fuji
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * @module
 * A React Hooks to count user's reward remains for random events.
 */

import type {
  store as Store,
  Profile,
  GenshinServer,
} from "@genshin-utils/app-profile/exports";
import type { timer } from "@genshin-utils/app-timer/exports";
import { loadRemoteContainer } from "@genshin-utils/module-federation";
import { Remotes } from "@genshin-utils/module-federation/remotes";
import {
  addDays,
  addHours,
  isAfter,
  parseISO,
  formatISO,
  subMinutes,
} from "date-fns";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  APP_ID,
  REMAINS_TABLE_ID,
  REMAINS_MAX,
  SERVER_RESET_HOUR,
} from "../constants";
import { CountState, RewardRemains } from "../states/CountState";

export function getServerDate(date: Date, server: GenshinServer) {
  const utcDate = subMinutes(date, date.getTimezoneOffset());

  return addHours(utcDate, server.tzOffset);
}

export function getNextServerResetDate(date: Date, server: GenshinServer) {
  const utcDate = subMinutes(date, date.getTimezoneOffset());

  const serverDate = addHours(utcDate, server.tzOffset);

  const tz =
    (server.tzOffset < 0 ? "-" : "+") +
    ("00" + server.tzOffset).slice(-2) +
    ":00";

  return parseISO(
    formatISO(
      serverDate.getHours() < SERVER_RESET_HOUR
        ? addDays(serverDate, 1)
        : serverDate,
      { representation: "date" }
    ) +
      "T" +
      ("00" + SERVER_RESET_HOUR).slice(-2) +
      ":00:00" +
      tz
  );
}

export function useCount(profile: Profile) {
  const [state, setState] = useState<CountState>({ type: "loading" });
  const [store, setStore] = useState<Store.Store | null>(null);
  const [schedule, setScheduleFn] = useState<typeof timer.schedule | null>(
    null
  );

  const nextReset = useMemo(() => {
    return getNextServerResetDate(new Date(), profile.server);
  }, [profile.server.tzOffset]);

  const saveState = useCallback(
    (remains: RewardRemains) => {
      if (!store) {
        return;
      }

      store.save<RewardRemains>(REMAINS_TABLE_ID, remains);
    },
    [store]
  );

  // Load the external schedule function from timer app
  useEffect(() => {
    loadRemoteContainer(Remotes.AppTimer).then(async (remote) => {
      const mod = await remote.getModule<{
        schedule: typeof timer.schedule;
      }>("timer");

      setScheduleFn(() => mod.schedule);
    });
  }, []);

  // Resets count on server reset time
  useEffect(() => {
    if (!schedule) {
      return;
    }

    return schedule(nextReset, () => {
      setState((prev) => {
        if (prev.type !== "loaded") {
          return prev;
        }

        const next: RewardRemains = {
          remains: REMAINS_MAX,
          loggedAt: formatISO(new Date()),
        };

        saveState(next);

        return {
          type: "loaded",
          data: next,
        };
      });
    });
  }, [schedule, nextReset.valueOf(), saveState]);

  // Loads store
  useEffect(() => {
    loadRemoteContainer(Remotes.AppProfile).then(async (remote) => {
      const { Store } = await remote.getModule<{
        Store: Store.StoreConstructor;
      }>("store");

      setStore(new Store(profile.id, APP_ID));
    });
  }, [profile]);

  // Loads initial state
  useEffect(() => {
    if (!store) {
      return;
    }

    store.load<RewardRemains>(REMAINS_TABLE_ID).then((data) => {
      const freshRemains: RewardRemains = {
        remains: REMAINS_MAX,
        loggedAt: formatISO(new Date()),
      };

      if (!data) {
        setState({
          type: "loaded",
          data: freshRemains,
        });
        return;
      }

      const isResetted = isAfter(
        new Date(),
        getNextServerResetDate(parseISO(data.loggedAt), profile.server)
      );

      if (isResetted) {
        saveState(freshRemains);
      }

      setState({
        type: "loaded",
        data: isResetted ? freshRemains : data,
      });
    });
  }, [store]);

  return {
    state,
    nextReset,
    setRemains(remains: number) {
      const normalized = Math.max(0, Math.min(REMAINS_MAX, remains));

      const next: RewardRemains = {
        remains: normalized,
        loggedAt: formatISO(new Date()),
      };

      saveState(next);

      setState((prev) =>
        prev.type === "loaded"
          ? {
              type: "loaded",
              data: next,
            }
          : prev
      );
    },
  } as const;
}
