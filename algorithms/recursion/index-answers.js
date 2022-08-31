// let numbers = [1, 2, 5, 15, 22, 23, 99];
// get the sum by using recursion
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

// Divide & conquer / D&C
// greatest common divisor (Euclid's algorithm)
export function euclidsAlgorithm(a, b) {
  if (a * 2 === b) {
    return a;
  }

  if (b * 2 === a) {
    return b;
  }

  if (a > b) {
    return euclidsAlgorithm(b, a - b);
  } else {
    return euclidsAlgorithm(a, b - a);
  }
}
