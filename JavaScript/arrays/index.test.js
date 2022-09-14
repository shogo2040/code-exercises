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
  test("1 of 8 - Add to the end of the array.", () => {
    const numbers = [2, 5, 22, 15, 11, 99];
    const numbersExpected = [2, 5, 22, 15, 11, 99, 5];
    expect(addToEndOfArray(5, numbers)).toEqual(numbersExpected);
  });

  test("2 of 8 - Remove from the end of an array", () => {
    const numbers = [2, 5, 22, 15, 11, 99];
    expect(removeFromEndOfArray(numbers)).toEqual([2, 5, 22, 15, 11]);
  });

  test("3 of 8 - Add to the start of an array", () => {
    const numbers = [2, 5, 22, 15, 11, 99];
    const numbersExpected = [5, 2, 5, 22, 15, 11, 99];
    expect(addToStartOfArray(5, numbers)).toEqual(numbersExpected);
  });

  test("4 of 8 - Remove from the start of an array", () => {
    const numbers = [2, 5, 22, 15, 11, 99];
    expect(removeFromStartOfArray(numbers)).toEqual([5, 22, 15, 11, 99]);
  });

  test("5 of 8 - Insert to an index of an array", () => {
    const numbers = [2, 5, 22, 15, 11, 99];
    expect(insertToIndexOfArray(numbers, 13, 2)).toEqual([
      2, 5, 13, 22, 15, 11, 99,
    ]);
  });

  test("6 of 8 - Replace items in an array", () => {
    const numbers = [2, 5, 22, 15, 11, 99];
    expect(replaceItemsInArray(numbers, 2, 2, -2, -3)).toEqual([
      2, 5, -2, -3, 11, 99,
    ]);
  });

  test("7 of 8 - Remove from index of an array", () => {
    const numbers = [2, 5, 22, 15, 11, 99];
    expect(removeFromIndexOfArray(numbers, 3)).toEqual([2, 5, 22, 11, 99]);
  });

  test("8 of 8 - Get the sub array", () => {
    const numbers = [2, 5, 22, 15, 11, 99];
    expect(getSubArray(numbers, 2, 5)).toEqual([22, 15, 11, 99]);
  });
});
