import { euclidsAlgorithm } from "./index";

describe("Euclid's algorithm - Greatest common divisor", () => {
  test("1 of 1 - Split this land up in the largest equal parts", () => {
    expect(euclidsAlgorithm(1680, 640)).toBe(80);
  });
});
