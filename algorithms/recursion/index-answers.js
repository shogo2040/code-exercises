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

// write a recursive function to count the number of items in a list
// const list = ['carrots', 'lettuce', 'onions', 'beef', 'potatos'];
export function recursiveCount(list) {
  if (list.length === 0) {
    return 0;
  } else {
    list.pop();
    return 1 + recursiveCount(list);
  }
}

// write a recursive function to find the maximum number in the list
// let numbers = [5, 6, 1, 82, 2, 55, 21, 8];
export function recursiveMaxNum(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    const lastNumber = numbers[numbers.length - 1];
    numbers.pop();
    const recursiveLastNumber = recursiveMaxNum(numbers);

    if (lastNumber > recursiveLastNumber) {
      return lastNumber;
    } else {
      return recursiveLastNumber;
    }
  }
}
