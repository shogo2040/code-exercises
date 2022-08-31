// numbers is an array of numbers
// const numbers = [1, 2, 5, 15, 22, 23, 99];
// return the index where value 23 is located

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

export function recursiveSearch(value, numbers, start, end) {
  if (numbers.length === 0) {
    return null;
  }

  let midLength;

  switch (start) {
    case 0:
      midLength = Math.floor((end - start) / 2);
      break;
    case numbers.length - 1:
      midLength = Math.ceil((end - start) / 2);
      break;
    default:
      midLength = Math.round((end - start) / 2);
  }

  const offsetMidIndex = start + midLength;
  const midValue = numbers[offsetMidIndex];

  if (value === midValue) {
    return offsetMidIndex;
  }

  if (end - start === 1) {
    return null;
  }

  if (value > midValue) {
    return recursiveSearch(value, numbers, offsetMidIndex, end);
  } else {
    return recursiveSearch(value, numbers, start, offsetMidIndex);
  }
}
