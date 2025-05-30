// Exercise 16: Write a function named 'sumNestedArray' that takes an array of arrays of numbers and returns the sum of all numbers.

function sumNestedArray(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    const subArray = arr[i];

    for (let j = 0; j < subArray.length; j++) {
      total = total + subArray[j];
    }
  }

  return total;
}

console.log(sumNestedArray([[1, 2, 3], [4, 5], [6, 7, 8]])) // 36