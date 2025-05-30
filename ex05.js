// Exercise 5: Write a function named 'groupByCategory' that takes an array of product objects and returns an object where the keys are categories and the values are arrays of products in those categories.

function groupByCategory(products) {
   const result = {};

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const category = product.category;

    if (result[category] === undefined) {
      result[category] = [product];
    } else {
      result[category].push(product); 
    }
  }

  return result;
}

console.log(groupByCategory([{ name: 'Apple', category: 'Fruit' }, { name: 'Carrot', category: 'Vegetable' }, { name: 'Banana', category: 'Fruit' }])) // { Fruit: [{ name: 'Apple', category: 'Fruit' }, { name: 'Banana', category: 'Fruit' }], Vegetable: [{ name: 'Carrot', category: 'Vegetable' }] }