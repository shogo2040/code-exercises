import { search } from "./index";

describe("Congratulations. You have coded binary search which has run time O(log n)", () => {
  const numbers = [1, 2, 5, 15, 22, 23, 99];

  test("1 of 4 - Use case for first element of array", () => {
    expect(search(1, numbers)).toBe(0);
  });

  test("2 of 4 - Use case for last element of array", () => {
    expect(search(99, numbers)).toBe(6);
  });

  test("3 of 4 - Use case for other element of array", () => {
    expect(search(23, numbers)).toBe(5);
  });

  test("4 of 4 - Use case for not found", () => {
    expect(search(3, numbers)).toBe(null);
  });
});
