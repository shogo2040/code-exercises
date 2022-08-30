// numbers is an array of numbers

// return the index where value 23 is located
// let numbers = [1, 2, 5, 15, 22, 23, 99];

export function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  if (numbers.length === 1) {
    return numbers[0];
  }

  const num = numbers[numbers.length - 1];
  numbers.pop();

  return num + sum(numbers);
}
