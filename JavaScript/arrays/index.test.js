import {
  addToEndOfArray,
  removeFromEndOfArray,
  addToStartOfArray,
  removeFromStartOfArray,
  insertToIndexOfArray,
  replaceItemsInArray,
  removeFromIndexOfArray,
  getSubArray,
} from "./index";

describe("Tests for an array of numbers", () => {
  const numbers = [2, 5, 22, 15, 11, 99];

  test("1 of 8 - Add to the end of the array.", () => {
    expect(addToEndOfArray(5, numbers)).toEqual([...numbers, 5]);
  });

  test("2 of 8 - Remove from the end of an array", () => {
    expect(removeFromEndOfArray(numbers)).toEqual([2, 5, 22, 15, 11]);
  });

  test("3 of 8 - Add to the start of an array", () => {
    expect(addToStartOfArray(5, numbers)).toEqual([5, ...numbers]);
  });

  test("4 of 8 - Remove from the start of an array", () => {
    expect(removeFromStartOfArray(numbers)).toEqual([5, 22, 15, 11, 99]);
  });

  test("5 of 8 - Insert to an index of an array", () => {
    expect(insertToIndexOfArray(numbers, 13, 2)).toEqual([
      2, 5, 13, 22, 15, 11, 99,
    ]);
  });

  test("6 of 8 - Replace items in an array", () => {
    expect(replaceItemsInArray(numbers, 2, 2, -2, -3)).toEqual([
      2, 5, -2, -3, 11, 99,
    ]);
  });

  test("7 of 8 - Remove from index of an array", () => {
    expect(removeFromIndexOfArray(numbers, 3)).toEqual([2, 5, 22, 11, 99]);
  });

  test("8 of 8 - Get the sub array", () => {
    expect(getSubArray(numbers, 2, 5)).toEqual([22, 15, 11, 99]);
  });
});
