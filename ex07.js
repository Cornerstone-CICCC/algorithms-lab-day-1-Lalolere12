// Exercise 7: Write a function named 'calculateAverage' that takes an array of numbers and returns the average value.

function calculateAverage(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }

  const average = total / arr.length;
  return average;
}

console.log(calculateAverage([10, 20, 30, 40, 50])) // 30