// numbers is an array of numbers

// return the index where value 23 is located
const numbers = [1, 2, 5, 15, 22, 23, 99];

export function search(value, numbers) {
  let start = 0;
  let end = numbers.length - 1;
  let middle = Math.round(end / 2);

  while (start <= end) {
    if (value === numbers[middle]) {
      console.log(`found ${value} at ${middle}`);
      return middle;
    }

    if (value < numbers[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = start + Math.round((end - start) / 2);
  }

  return null;
}
