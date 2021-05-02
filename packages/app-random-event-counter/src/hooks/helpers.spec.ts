import { getServerDate, getNextServerResetDate } from "./helpers";

// Every input date MUST be UTC+00:00 because $TZ is fixed to UTC

describe("getServerDate", () => {
  it("Should return a date converted to server's timezone", () => {
    const now = new Date("2020-01-01T00:00:00+00:00");

    const actual = getServerDate(now, {
      name: "",
      tzOffset: 8,
    });

    // Ensure test runs under UTC timezone
    expect(now.getTimezoneOffset()).toBe(0);
    // 00:00 at UTC = 08:00 at UTC+08:00
    // Timezone is set to UTC because Date object does not have TZ info
    expect(actual.toISOString()).toBe(
      new Date("2020-01-01T08:00:00+00:00").toISOString()
    );
  });

  it("Should work even with below-zero-timezones", () => {
    const now = new Date("2020-01-01T00:00:00+00:00");

    const actual = getServerDate(now, {
      name: "",
      tzOffset: -11,
    });

    // 00:00 at UTC = 13:00 (yesterday) at UTC-11:00
    // Timezone is set to UTC because Date object does not have TZ info
    expect(actual.toISOString()).toBe(
      new Date("2019-12-31T13:00:00+00:00").toISOString()
    );
  });
});

describe("getNextServerResetDate", () => {
  it("Should work for current day reset", () => {
    const now = new Date("2019-12-31T10:00:00+00:00");

    const actual = getNextServerResetDate(now, {
      name: "",
      tzOffset: 5,
    });

    expect(actual.toISOString()).toBe(
      new Date("2020-01-01T04:00:00+05:00").toISOString()
    );
  });

  it("Should work for next day reset", () => {
    const now = new Date("2020-01-01T05:30:00+00:00");

    const actual = getNextServerResetDate(now, {
      name: "",
      tzOffset: -1,
    });

    expect(actual.toISOString()).toBe(
      new Date("2020-01-02T04:00:00-01:00").toISOString()
    );
  });
});
