// numbers is an array of numbers
/*
const numbers = [2, 5, 22, 15, 1, 99];
*/

// USE ES5 array methods (except for cloning, you can use spread operator)

export function addToEndOfArray(item, arrayInput) {
  const array = [...arrayInput];
  const newLength = array.push(item);
  return array;
}

export function removeFromEndOfArray(arrayInput) {
  const array = [...arrayInput];
  const deletedElement = array.pop();
  return array;
}

export function addToStartOfArray(item, arrayInput) {
  const array = [...arrayInput];
  const newLength = array.unshift(item);
  return array;
}

export function removeFromStartOfArray(arrayInput) {
  const array = [...arrayInput];
  const deletedElement = array.shift();
  return array;
}

export function insertToIndexOfArray(arrayInput, item, index) {
  const array = [...arrayInput];
  const newLength = array.splice(index, 0, item);
  return array;
}

export function replaceItemsInArray(
  arrayInput,
  index,
  itemCount,
  item1,
  item2
) {
  const array = [...arrayInput];
  const newLength = array.splice(index, itemCount, item1, item2);
  return array;
}

export function removeFromIndexOfArray(arrayInput, index) {
  const array = [...arrayInput];
  array.splice(index, 1);
  return array;
}

export function getSubArray(arrayInput, start, end) {
  const array = [...arrayInput];
  return array.slice(start, end + 1);
}
