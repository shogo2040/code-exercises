/* Timed Test */

// numbers is an array of numbers
/*

const numbers = [2, 5, 22, 15, 1, 99];

*/

// You must use a built in object of the language
export function getSmallestNumberWithBuiltInObject(numbers) {}

// You cannot use the built in object you used above.
export function getSmallestNumberWithoutBuiltIn(numbers) {}

export function calculateAverageToHundredthsDecimal(numbers) {}

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
export function sortUsersByName(users) {}

export function getUserByName(users, name) {}

export function getUsersByCompany(users, company) {}

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

export function mergeUsersES5(users1, users2) {}

export function mergeUsersES6(users1, users2) {}

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

export function mergeUserDataES5(user1, user2) {}

export function mergeUserDataES6(user1, user2) {}

/*
const testDataUrl = 'https://my-json-server.typicode.com/typicode/demo/db';
*/

const fetch = require("node-fetch");

export function createPromiseFromApiUrlWithThen(testDataUrl) {}

export function createPromiseFromApiUrlWithAsync(testDataUrl) {}

export function closureThatIncrementsInput(number) {}

// closure To Simluate setAge getAge with age as a private var
export function PersonCreate() {}

// currying:
// URL creator, the first call you pass the base url. Curry over the pagetype url.
export function URLCreator(baseUrl) {}

// recursion:
// use recursion to implement factorial
export function factorial(number) {}
