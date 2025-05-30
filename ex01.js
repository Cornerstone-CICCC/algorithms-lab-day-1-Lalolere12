// Exercise 1: Write a function named 'sumPrices' that takes an array of product objects (each with a 'price' property) and returns the total sum of all prices.

function sumPrices(products) {
     let total = 0;

  for (let i = 0; i < products.length; i++) {
    total = total + products[i].price;
  }

  return total;
}


console.log(sumPrices([{ price: 10 }, { price: 20 }, { price: 30 }])) // 60

