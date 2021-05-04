import type { GenshinServer } from "@genshin-utils/app-profile/exports";
import {
  addDays,
  parseISO,
  formatISO,
  subDays,
  differenceInSeconds,
} from "date-fns";

import { SERVER_RESET_HOUR } from "../constants";

export function getNextOfTheHour(base: Date, compared: Date): Date {
  const diff = differenceInSeconds(compared, base);

  // If `compared` is before or equal to `base`
  if (diff <= 0) {
    return getNextOfTheHour(base, addDays(compared, 1));
  }

  // If the difference is over 1 day
  if (diff > 24 * 60 * 60) {
    return getNextOfTheHour(base, subDays(compared, 1));
  }

  return compared;
}

export function getNextServerResetDate(date: Date, server: GenshinServer) {
  const tz =
    (server.tzOffset < 0 ? "-" : "+") +
    ("00" + Math.abs(server.tzOffset)).slice(-2) +
    ":00";

  const resetTime = ("00" + SERVER_RESET_HOUR).slice(-2) + ":00:00";

  return getNextOfTheHour(
    date,
    parseISO(formatISO(date, { representation: "date" }) + "T" + resetTime + tz)
  );
}
