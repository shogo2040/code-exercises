import { sum } from "./index";

describe("Sum of array of numbers using recursion", () => {
  const numbers = [1, 2, 5, 15, 22, 23, 99];

  test("1 of 3 - Use case for 1 element in array", () => {
    expect(sum([34])).toBe(34);
  });

  test("2 of 3 - Use case for empty array", () => {
    expect(sum([])).toBe(0);
  });

  test("3 of 3 - Common use case for non empty array", () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });
});
