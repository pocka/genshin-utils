import { getNextOfTheHour, getNextServerResetDate } from "./helpers";

describe("getNextOfTheHour", () => {
  it("Should return 1 day after", () => {
    expect(
      getNextOfTheHour(
        new Date("2020-01-02T01:00:00+00:00"),
        new Date("2020-01-01T00:00:00+00:00")
      ).toISOString()
    ).toBe(new Date("2020-01-03T00:00:00+00:00").toISOString());
  });

  it("Should return given date as-is", () => {
    const given = new Date("2020-01-01T01:00:00+00:00");

    expect(getNextOfTheHour(new Date("2020-01-01T00:00:00+00:00"), given)).toBe(
      given
    );
  });

  it("Should return the nearest date", () => {
    expect(
      getNextOfTheHour(
        new Date("2020-01-01T01:00:00+00:00"),
        new Date("2020-02-01T01:00:00+00:00")
      ).toISOString()
    ).toBe(new Date("2020-01-02T01:00:00+00:00").toISOString());
  });

  it("Should work even the dates are close", () => {
    expect(
      getNextOfTheHour(
        new Date("2020-01-01T00:59:59+00:00"),
        new Date("2020-01-01T01:00:00+00:00")
      ).toISOString()
    ).toBe(new Date("2020-01-01T01:00:00+00:00").toISOString());
  });
});

describe("getNextServerResetDate", () => {
  it("Should work for current day reset", () => {
    const now = new Date("2020-01-01T04:59:59+09:00");

    const actual = getNextServerResetDate(now, {
      name: "",
      tzOffset: 8,
    });

    expect(actual.toISOString()).toBe(
      new Date("2020-01-01T04:00:00+08:00").toISOString()
    );
  });

  it("Should work for next day reset", () => {
    const now = new Date("2020-01-01T05:00:00+09:00");

    const actual = getNextServerResetDate(now, {
      name: "",
      tzOffset: 8,
    });

    expect(actual.toISOString()).toBe(
      new Date("2020-01-02T04:00:00+08:00").toISOString()
    );
  });
});
