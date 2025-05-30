// Exercise 6: Write a function named 'uniqueValues' that takes an array of values and returns a new array with only unique values, removing duplicates.

function uniqueValues(arr) {
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (!unique.includes(value)) {
      unique.push(value);
    }
  }

  return unique;
}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])) // [1, 2, 3, 4, 5]