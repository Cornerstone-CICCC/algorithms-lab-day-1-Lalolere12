// Exercise 3: Write a function named 'getFullNames' that takes an array of user objects (each with 'firstName' and 'lastName' properties) and returns an array of full names (e.g., 'John Doe'). 

function getFullNames(users) {
    const fullNames = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const fullName = user.firstName + ' ' + user.lastName;
    fullNames.push(fullName);
  }

  return fullNames;
}

console.log(getFullNames([{ firstName: 'John', lastName: 'Doe' }, { firstName: 'Jane', lastName: 'Doe' }])) // ['John Doe', 'Jane Doe']
