// strict mode
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio';
// const private = 534;

// functions
function logger() {
  console.log("My name is Claudia");
}

// calling - running - invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// function declaration
const age1 = calcAge1(1982);

function calcAge1(birthYear) {
  return 2024 - birthYear;
}

console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(1982);
console.log(age1, age2);

// arrow function
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(1982);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1982, "Claudia"));
console.log(yearsUntilRetirement(1974, "Bob"));

// functions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement2(1982, "Claudia"));
console.log(yearsUntilRetirement2(1932, "Ben"));

// arrow function calculating average score
const calcAverage = (match1, match2, match3) => (match1 + match2 + match3) / 3;

// variable storing Dolphins points' average
const scoreDolphins = calcAverage(44, 23, 71);
console.log(scoreDolphins);

// variable storing Koalas points' average
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreKoalas);

// function expression taking two parameters and determining who is the winner
// the function also output the result to the console
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

// calling the function with the selected two arguments
checkWinner(scoreDolphins, scoreKoalas);

// arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

const calcAgeW = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const ageA = calcAgeW(years[0]);
const ageB = calcAgeW(years[1]);
const ageC = calcAgeW(years[years.length - 1]);
console.log(ageA, ageB, ageC);

const ages = [
  calcAgeW(years[0]),
  calcAgeW(years[2]),
  calcAgeW(years[years.length - 1]),
];
console.log(ages);

// array ops = methods
const friends2 = ["Michael", "Steven", "Peter"];

// push = add elements
const newLength = friends2.push("Jay");
console.log(friends2);
console.log(newLength);

// unshift = adds elements at the beginning of the array
friends2.unshift("John");
console.log(friends2);

// pop = remove last element
friends2.pop();
const popped = friends2.pop();
console.log(popped);
console.log(friends2);

friends2.shift();
console.log(friends2);

console.log(friends2.indexOf("Steven"));
console.log(friends2.indexOf("Bob"));

friends2.push(23);
console.log(friends2.includes("Steven"));
console.log(friends2.includes("Bob"));
console.log(friends2.includes(23));

if (friends2.includes("Steven")) {
  console.log("You have a friend called Steven");
}

//code challenge

// is statement version
// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return ((bill / 100) * 15)
//   } else {
//     return ((bill / 100) * 20)
//   }
// };

// ternary op version
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// arrow function version
const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

calcTip(100);
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(totals);

// arrow function exercises
// 1.
const greet = () => "Hello, World!";
// 2.
// function greet2(name) {
//   return 'Hello, ' + name;
// }

const greet2 = name => "Hello, " + name;
console.log(greet2("Claudia"));

// 3.
// function square(x) {
//   return x * x;
// }

const square = x => x * x;
console.log(square(15));

// 4. Write an arrow function named multiply that takes two parameters and returns their product.
const multiply = (a, b) => a * b;
console.log(multiply(10, 5));

// 5. Write an arrow function named isEven that takes a number and returns true if the number is even and false if it is not.
const isEven = number => number % 2 === 0;
console.log(isEven(58));
console.log(isEven(117));

// 6. Write an arrow function named firstChar that takes a string and returns the first character.
const firstChar = word => word[0];
console.log(firstChar("Claudia"));
console.log(firstChar("Ronnie"));

// 7. Write an arrow function named convertToSeconds that takes a number of minutes and returns the equivalent number of seconds.
const convertToSeconds = minutes => minutes * 60;
console.log(convertToSeconds(268));

// 8. Given an array of numbers, write an arrow function named filterEvenNumbers that returns a new array containing only the even numbers.
const array = [25, 69, 32, 44, 58, 0, 17];
const filterEvenNumbers = array => array.filter(num => num % 2 === 0);
console.log(filterEvenNumbers(array));

// 9. Given an array of numbers, write an arrow function named doubleNumbers that returns a new array with each number doubled.
const doubleNumbers = array => array.map(num => num * 2);
console.log(doubleNumbers(array));

// 10. Given an array of numbers, write an arrow function named sumArray that returns the sum of all the numbers.
const sumArray = array => array.reduce((total, num) => total + num, 0);
console.log(sumArray(array));

// ternary
// condition ? exprIfTrue : exprIfFalse
const age = 15;
const canVote = age >= 18 ? "Can vote" : "Cannot vote";

console.log(canVote);

// 1. Write a function findLargerNumber that takes two numbers as parameters and returns the larger number using the ternary operator.
const findLargerNumber = (a, b) => (a > b ? a : b);
console.log(findLargerNumber(1085, 16541));

// 2. Write a function isEvenOrOdd that takes a number as a parameter and returns "Even" if the number is even, and "Odd" if the number is odd, using the ternary operator.
const isEvenOrOdd = num => (num % 2 === 0 ? "Even" : "Odd");
console.log(isEvenOrOdd(2654));

// 3. Write a function checkEligibility that takes an age as a parameter and returns "Allowed" if the age is 18 or above, and "Not Allowed" otherwise, using the ternary operator.
const checkEligibility = age => (age >= 18 ? "Allowed" : "Not allowed");
console.log(checkEligibility(56));
console.log(checkEligibility(12));

// 4. Write a function checkSign that takes a number as a parameter and returns "Positive", "Negative", or "Zero" using the ternary operator.
const checkSign = number => (number >= 0 ? "Positive" : "Negative");
console.log(checkSign(-25));
console.log(checkSign(45));

// objects = used to group variables, order of the values does not matter (!= not in arrays)
// used for unstructured data
// property: value
// const claudia = {
//   firstName: 'Claudia',
//   lastName: 'De Tata',
//   age: 2024 - 1982,
//   job: 'Software Developer',
//   friends: ['Ana', 'Fran', 'Lorena']
// };

// console.log(claudia);

// dot.notation = to get a property from an object
// console.log(claudia.lastName);

// // brackets notation
// console.log(claudia['lastName']);

// const nameKey = 'Name';
// console.log(claudia['first' + nameKey]);
// console.log(claudia['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about me? Choose between firstName, lastName, age, job and friends');
// console.log(claudia[interestedIn]); // in this case interestedIn is an expression, so we use BN

// if (claudia[interestedIn]) {
//   console.log(claudia[interestedIn]);
// } else {
//   console.log('Wrong request!Choose between firstName, lastName, age, job and friends');
// }

// // adding new properties to an object
// claudia.location = 'Scotland';
// claudia['placeOfBirth'] = 'Benevento';
// console.log(claudia);

// // challenge
// // "Claudia has 3 friends and her best friend is called Fran";
// console.log(`${claudia.firstName} has ${claudia.friends.length} friends and her best friend is called ${claudia.friends[1]}`);

// const claudia = {
//   firstName: 'Claudia',
//   lastName: 'De Tata',
//   birthYear: 1982,
//   job: 'Software Developer',
//   friends: ['Ana', 'Fran', 'Lorena'],
//   hasDriversLicense: true,

// calcAge: function (birthYear) {
//   return 2024 - birthYear;
// }

// calcAge: function () {
//   console.log(this);
//   return 2024 - this.birthYear;
// }

// calcAge: function () {
//   this.age = 2024 - this.birthYear;
//   return this.age;
// },

// getSummary: function () {
//   return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
// }
// };

// console.log(claudia.getSummary());

// console.log(claudia.calcAge());
// // console.log(claudia['calcAge'](1982));

// console.log(claudia.age);

// challenge
// "Claudia is a 42-years old Software Developer and she has a/no driver's license."

// coding challenge #3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}

// object method exercise #1
const library = {
  books: [],

  addBook: function (title, author) {
    this.books.push({ title: title, author: author, isAvailable: true });
    console.log(`${title} has been added to the library.`);
  },
  listBooks: function () {
    console.log("Books in the library:");
    this.books.forEach(book => {
      console.log(`${book.title} by ${book.author}`);
    });
  },
};

library.addBook("The Hobbit", "J. R. R. Tolkien");
library.addBook("1984", "George Orwell");
library.addBook("To Kill a Mockingbird", "Harper Lee");

library.listBooks();

// object method exercise #2
const college = {
  students: [],

  addStudents: function (fullName, studentID) {
    this.students.push({
      fullName: fullName,
      studentID: studentID,
      fullTimeStudent: true,
    });
    console.log(`${fullName} has been added to the student record.`);
  },

  listStudents: function () {
    console.log("Registered students: ");
    this.students.forEach(students => {
      console.log(
        `${students.fullName} - ${students.studentID} - ${
          students.fullTimeStudent ? "FT" : "PT"
        }`
      );
    });
  },
};

college.addStudents("Claudia De Tata", "EC1587489", true);
college.addStudents("John Doe", "EC1597895", false);
college.addStudents("Carrie Bean", "EC1524679", true);

college.listStudents();

// object method exercise #3
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(student.name, student.sclass, student.rollno);

for (var key in student) {
  console.log(key + ":", student[key]);
}

// loops
// for loop keeps running while condition is true
console.log("Lifting weights rep 1 🏋️‍♀️");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights rep ${rep} 🏋️‍♀️`);
}

// looping through an array
// const claudia = [
//   'Claudia',
//   'De Tata',
//   2024 - 1982,
//   'Software Developer',
//   ['Ana', 'Fran', 'Lorena'],
//   true
// ];

// const types = [];

// for (let i = 0; i < claudia.length; i++) {
//   // reading from claudia array
//   console.log(claudia[i], typeof claudia[i]);

//   // filling types array
//   // types[i] = typeof claudia[i];
//   types.push(typeof claudia[i]);
// }

// console.log(types);

// const years2 = [1991, 2007, 1969, 2020, 1982];
// const ages2 = [];

// for (let i = 0; i < years2.length; i++) {
//   ages2.push(2024 - years2[i]);
// }

// console.log(ages2);

// // continue only strings
// for (let i = 0; i < claudia.length; i++) {
//   if (typeof claudia[i] !== 'string') continue;

//   console.log(claudia[i], typeof claudia[i]);
// }

// // break only strings
// for (let i = 0; i < claudia.length; i++) {
//   if (typeof claudia[i] !== 'number') break;

//   console.log(claudia[i], typeof claudia[i]);
// }

// loop inside a loop
const claudia = [
  "Claudia",
  "De Tata",
  2024 - 1982,
  "Software Developer",
  ["Ana", "Fran", "Lorena"],
  true,
];

// looping backward
// for (let i = claudia.length - 1; i >= 0; i--) {
//   console.log(i, claudia[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// };

// while loop
let rep = 1;
while (rep <= 10) {
  // console.log(`Lifting weigths repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end..");
}

// coding challenge #4
const calcTip2 = function (bills2) {
  return bills2 >= 50 && bills2 <= 300 ? bills2 * 0.15 : bills2 * 0.2;
};

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips2 = [];

let totals2 = [];

for (let i = 0; i < bills2.length; i++) {
  const tip = calcTip(bills2[i]);
  tips2.push(tip);
  totals2.push(tip + bills2[i]);
}

console.log(bills2, tips2, totals2);

// bonus
const calcAverage2 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage2(totals2));

//JS fundamentals exercises
// Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const Italy = describeCountry("Italy", "59", "Rome");
const Spain = describeCountry("Spain", "47", "Madrid");
const Portugal = describeCountry("Portugal", "10", "Lisbon");

console.log(Italy);
console.log(Spain);
console.log(Portugal);

//declaration vs expression
// declaration
function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2);
}

const percItaly = percentageOfWorld1(59);
const percSpain = percentageOfWorld1(47);
const percPortugal = percentageOfWorld1(10);

console.log(percItaly);
console.log(percSpain);
console.log(percPortugal);

//expression
const percentageOfWorld2 = function (population) {
  return ((population / 7900) * 100).toFixed(2);
};

const percChina = percentageOfWorld2(1402);
const percJapan = percentageOfWorld2(125);
const percIndia = percentageOfWorld2(1407);

console.log(percChina);
console.log(percJapan);
console.log(percIndia);

// arrow function
const percentageOfWorld3 = population => ((population / 7900) * 100).toFixed(2);

// function calling other function
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);

  return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

console.log(describePopulation("Italy", 59));

// arrays
const populations = [59, 47, 10, 1402];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld2(populations[3]),
];

console.log(percentages);

// array methods

const neighbours = ["France", "Switzerland", "Austria", "Slovenia"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country 😄");
} else {
  console.log("Tschuss!");
}

neighbours.unshift("Germany");
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country 😄");
} else {
  console.log("Tschuss!");
}

// console.log(neighbours.indexOf("Austria"));

// const newName = "Osterreich";
// neighbours[3] = newName;

// console.log(neighbours);

neighbours[neighbours.indexOf("Austria")] = "Osterreich";
console.log(neighbours);

// objects

const myCountry = {
  country: "Italy",
  capital: "Rome",
  language: "Italian",
  population: 59,
  neighbours: ["France", "Switzerland", "Austria", "Slovenia"],
};

console.log(myCountry);

// dot vs bracket notation
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

// console.log(myCountry.population + 2);
// console.log(myCountry["population"] - 2);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

//object methods
// IMPORTANT
// how to add methods to existing objects
myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
  );
};

myCountry.describe();

myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length === 0 ? true : false;
};

myCountry.checkIsland();

console.log(myCountry);

// for loop
for (let voter = 0; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting 🗳`);
}

// loop through an array
let percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

// looping backwards
// IMPORTANT
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// while loop

let percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);
