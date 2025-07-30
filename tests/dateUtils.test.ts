import { isPast } from "../src/utils/dateUtils";

describe("dateUtils.isPast", () => {
  it("returns true for past dates", () => {
    const past = new Date(Date.now() - 1000);
    expect(isPast(past)).toBe(true);
  });

  it("returns false for future dates", () => {
    const future = new Date(Date.now() + 1000);
    expect(isPast(future)).toBe(false);
  });
});
