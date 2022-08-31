import {
  sum,
  euclidsAlgorithm,
  recursiveCount,
  recursiveMaxNum,
} from "./index";

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

describe("Euclid's algorithm - Greatest common divisor", () => {
  test("1 of 1 - Split this land up in the largest equal parts", () => {
    expect(euclidsAlgorithm(1680, 640)).toBe(80);
  });
});

describe("write a recursive function to count the number of items in a list", () => {
  const list = ["carrots", "lettuce", "onions", "beef", "potatos"];

  test("1 of 3 - nonzero list", () => {
    expect(recursiveCount(list)).toBe(5);
  });

  test("2 of 3 - 1 element list", () => {
    expect(recursiveCount(["lala"])).toBe(1);
  });

  test("3 of 3 - empty list", () => {
    expect(recursiveCount([])).toBe(0);
  });
});

describe("write a recursive function to find the maximum number in the list", () => {
  let numbers = [5, 6, 1, 82, 2, 55, 21, 8];

  test("1 of 3 - nonzero list", () => {
    expect(recursiveMaxNum(numbers)).toBe(82);
  });

  test("2 of 3 - 1 element list", () => {
    expect(recursiveMaxNum([9])).toBe(9);
  });

  test("3 of 3 - empty list", () => {
    expect(recursiveMaxNum([])).toBe(0);
  });
});
