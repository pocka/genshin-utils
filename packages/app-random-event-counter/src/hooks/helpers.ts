import type { GenshinServer } from "@genshin-utils/app-profile/exports";
import { addDays, addHours, parseISO, formatISO, subMinutes } from "date-fns";

import { SERVER_RESET_HOUR } from "../constants";

export function getServerDate(date: Date, server: GenshinServer) {
  const utcDate = subMinutes(date, date.getTimezoneOffset());

  return addHours(utcDate, server.tzOffset);
}

export function getNextServerResetDate(date: Date, server: GenshinServer) {
  const serverDate = getServerDate(date, server);

  const tz =
    (server.tzOffset < 0 ? "-" : "+") +
    ("00" + Math.abs(server.tzOffset)).slice(-2) +
    ":00";

  return parseISO(
    formatISO(
      serverDate.getHours() < SERVER_RESET_HOUR
        ? serverDate
        : addDays(serverDate, 1),
      { representation: "date" }
    ) +
      "T" +
      ("00" + SERVER_RESET_HOUR).slice(-2) +
      ":00:00" +
      tz
  );
}
