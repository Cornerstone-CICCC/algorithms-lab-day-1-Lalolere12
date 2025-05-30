// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.

function countOccurrences(arr) {
  const counts = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (counts[item] === undefined) {
      counts[item] = 1;
    } else {
      counts[item] = counts[item] + 1;
    }
  }

  return counts;
}

console.log(countOccurrences(['apple', 'banana', 'apple'])) // { apple: 2, banana: 1 }