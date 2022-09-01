// Divide & conquer / D&C
// Quicksort
// const numbers = [6, 2, 22, 988, 3, 376, 8, 55];

export function quicksort(numbers) {
  const pivot = Math.floor(Math.random() * numbers.length);
  let numbersLtPivot = [];
  let numbersGtPivot = [];

  if (numbers.length < 2) {
    return numbers;
  }

  for (let i in numbers) {
    if (numbers[i] === numbers[pivot]) {
      continue;
    }

    if (numbers[i] < numbers[pivot]) {
      numbersLtPivot.push(numbers[i]);
    } else {
      numbersGtPivot.push(numbers[i]);
    }
  }

  return [
    ...quicksort(numbersLtPivot),
    numbers[pivot],
    ...quicksort(numbersGtPivot),
  ];
}
