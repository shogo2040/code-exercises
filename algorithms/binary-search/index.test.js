import { search, recursiveSearch } from "./index";

const numbers = [1, 2, 5, 15, 22, 23, 99];

function testSearch(search, start = 0, end = numbers.length - 1) {
  describe("Congratulations. You have coded binary search which has run time O(log n)", () => {
    test("1 of 4 - Use case for first element of array", () => {
      expect(search(1, numbers, start, end)).toBe(0);
    });

    test("2 of 4 - Use case for last element of array", () => {
      expect(search(99, numbers, start, end)).toBe(6);
    });

    test("3 of 4 - Use case for other element of array", () => {
      expect(search(23, numbers, start, end)).toBe(5);
    });

    test("4 of 4 - Use case for not found", () => {
      expect(search(3, numbers, start, end)).toBe(null);
    });
  });
}

testSearch(search);
testSearch(recursiveSearch);
