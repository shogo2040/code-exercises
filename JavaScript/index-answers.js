/* Timed Test */

// numbers is an array of numbers
/*

const numbers = [2, 5, 22, 15, 1, 99];

*/

// You must use a built in object of the language
export function getSmallestNumberWithBuiltInObject(numbers) {
  return Math.min(...numbers);
}

// You cannot use the built in object you used above.
export function getSmallestNumberWithoutBuiltIn(numbers) {
  return numbers.reduce((prev, curr) => (prev < curr ? prev : curr));
}

export function calculateAverageToHundredthsDecimal(numbers) {
  return (numbers.reduce((prev, curr) => prev + curr) / numbers.length).toFixed(
    2
  );
}

/* users is an array of user objects */
/*

const users = [
  {
    id: 2345,
    name: 'Rey',
    company: 'Livingly'
  },
  {
    id: 1342342,
    name: 'Scott',
    company: 'Livingly'
  },
  {
    id: 23324432,
    name: 'Michael',
    company: 'Livingly',
  },
  {
    id: 324324,
    name: 'Jian',
    company: 'CyberDVD',
  },
]

*/
export function sortUsersByName(users) {
  const usersCopy = [...users];
  return usersCopy.sort((prev, curr) => (prev.name < curr.name ? 1 : -1));
}

export function getUserByName(users, name) {
  return users.find((user) => user.name === name);
}

export function getUsersByCompany(users, company) {
  return users.filter((user) => user.company === company);
}

/* livinglyUsers and cyberDvdUsers each are an array of user objects */
/*

const livinglyUsers = [
  {
    id: 2345,
    firstName: 'Rey',
    company: 'Livingly'
  },
  {
    id: 1342342,
    firstName: 'Scott',
    company: 'Livingly'
  },
  {
    id: 23324432,
    firstName: 'Michael',
    company: 'Livingly',
  },
];

const cyberDvdUsers = [
  {
    id: 324324,
    firstName: 'Jian',
    company: 'CyberDVD',
  },
];

*/

export function mergeUsersES5(users1, users2) {
  return users1.concat(users2);
}

export function mergeUsersES6(users1, users2) {
  return [...users1, ...users2];
}

/*

const userData1 = {
  id: 2345,
  firstName: 'Rey',
  company: 'Livingly'
};

const userData2 = {
  id: 2345,
  lastName: 'Arqueza',
  company: 'Livingly'
}

*/

export function mergeUserDataES5(user1, user2) {
  return Object.assign(user1, user2);
}

export function mergeUserDataES6(user1, user2) {
  return { ...user1, ...user2 };
}

/*
const testDataUrl = 'https://my-json-server.typicode.com/typicode/demo/db';
*/

const fetch = require("node-fetch");

export function createPromiseFromApiUrlWithThen(testDataUrl) {
  return new Promise((resolve, reject) => {
    fetch(testDataUrl)
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((e) => reject(e));
  });
}

export function createPromiseFromApiUrlWithAsync(testDataUrl) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(testDataUrl);
      const json = await response.json();
      resolve(json);
    } catch (e) {
      reject(e);
    }
  });
}

export function closureThatIncrementsInput(number) {
  let counter = number;
  return function () {
    counter = counter + 1;
    return counter;
  };
}

/*
const counter = closureThatIncrementsInput(5);
console.log(counter())
console.log(counter())
console.log(counter())
*/

// closure To Simluate setAge getAge with age as a private var
export function PersonCreate() {
  let age;
  return {
    setAge: (targetAge) => {
      age = targetAge;
    },
    getAge: () => age,
  };
}

/*
const person = PersonCreate();
person.setAge(5);
console.log(person.getAge());
person.setAge(10);
console.log(person.getAge());
*/
// currying:
// URL creator, the first call you pass the base url. Curry over the pagetype url.
export function URLCreator(baseUrl) {
  return function (pageTypeUrl) {
    return `${baseUrl}${pageTypeUrl}`;
  };
}

/*
const website = URLCreator('https://www.livingly.com');
const aboutPage = website('/about');
const contactPage = website('/contact');

const mediaPage = URLCreator('https://www.livinglymedia.com')('/signup');
console.log(aboutPage);
console.log(contactPage);
console.log(mediaPage);
*/

// recursion:
// use recursion to implement factorial
export function factorial(number) {
  if (number > 1) {
    return number * factorial(number - 1);
  } else {
    return number;
  }
}
