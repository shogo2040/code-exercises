import { quicksort } from "./index";

describe("quicksort algorithm - use random pivot: O(n * log n)", () => {
  const numbers = [6, 2, 22, 988, 3, 376, 8, 55];
  const orderedNums = [2, 3, 6, 8, 22, 55, 376, 988];

  test("1 of 4 - an unempty unordered list", () => {
    expect(quicksort(numbers)).toEqual([2, 3, 6, 8, 22, 55, 376, 988]);
  });

  test("2 of 4 - an unempty ordered list", () => {
    expect(quicksort(orderedNums)).toEqual([2, 3, 6, 8, 22, 55, 376, 988]);
  });

  test("3 of 4 - an empty list", () => {
    expect(quicksort([])).toEqual([]);
  });

  test("4 of 4 - a list with one number", () => {
    expect(quicksort([8])).toEqual([8]);
  });
});
