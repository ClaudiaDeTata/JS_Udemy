/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Claudia";
console.log(firstName);
console.log(firstName);
console.log(firstName);


let age = 30;
age = 31;

const birthYear = 1982;
birthYear = 1990;
*/

// assignments
const country = "Italy";
const continent = "Europe";
let population = 60;

console.log(country);
console.log(continent);
console.log(population);


const isIsland = false;
let language;
console.log(isIsland);
console.log(language);

console.log(typeof country);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof language);

language = "Italian";

let halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);

const otherCountry = "Finland";
const othercontinent = "Europe";
let populationFinland = 6;
console.log(country >= otherCountry);

let averagePopulation = 33;
console.log(population <= averagePopulation);

let description = country + " is in Europe, and its " + population + " million people speak " + language;
let description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);
console.log(description2);

// if statements
if (population > averagePopulation) {
  console.log(`${country}'s population is ${population - averagePopulation} million above average.`);
} else {
  console.log(`${country}'s population is ${averagePopulation - population} million below average`);
}

// type conversion & coercion

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // '617'  The - operator triggers numeric conversion!!
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// equality ops
// prompt returns a string so we convert it to a number 
// this way, using strictly equal will give the correct answer when the number inputted is 1
// const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// };

// logical operator
if (language === 'English' && population < 50 && !isIsland) {
  console.log('You should live in ${country} :)');
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// switch statement

switch (language) {
  case 'Chinese':
  case 'Mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'Spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'English':
    console.log('3rd place');
    break;
  case 'Hindi':
    console.log('Number 4');
    break;
  case 'Arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D')
    break;
};

// ternary operator
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average.`);

// functions
// not correct
// function describeCountry(country, population, capitalCity) {
//   console.log(`${country} has ${population} million people and its capital city is ${capitalCity}.`)
// }

// describeCountry('Italy', 58, 'Rome');
// describeCountry('UK', 67, 'London');
// describeCountry('Spain', 48, 'Madrid');

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const describeItaly = describeCountry('Italy', 58, 'Rome');
const describeUk = describeCountry('UK', 67, 'London');
const describeSpain = describeCountry('Spain', 48, 'Madrid');

console.log(describeItaly, describeUk, describeSpain);

// function declaration vs expression
// const totalPopulation = 7900;

// function percentageOfWorld1() {
//   return `${country} has ${population} million people, so it's about ${((population / totalPopulation) * 100).toFixed(2)} % of the world population.`;
// }

// const percentageItaly = percentageOfWorld1('Italy', 58);

// console.log(percentageItaly);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageItaly = percentageOfWorld1(58);

console.log(`${country} has ${population} million people, so it's about ${percentageOfWorld1(population).toFixed(2)} % of the world population.`);


const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
}

const percentageItaly2 = percentageOfWorld2(58);

console.log(`${country} has ${population} million people, so it's about ${percentageOfWorld2(population).toFixed(2)} % of the world population.`);


// new chapter
const firstName = 'Claudia';
const job = 'student';
const birthYear = 1982;
const year = 2024;

const claudia = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(claudia);

const claudiaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(claudiaNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with 
multiple  
lines`);

const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :) `);
};

const myBirthYear = 1982;

let century;

if (myBirthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Claudia'));

console.log(String(23));

// type coercion
console.log('I am ' + 42 + ' years old.');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');

let n = '1' + 1; // + converts to strings
n = n - 1; // - converts to numbers
console.log(n);

console.log(2 + 3 + 4 + '5');
console.log('10' - '4' - '3' - 2 + '5');

//falsy values: 0, '', undefined, null, NaN; They will be converted to false when we attempt to convert them to a Boolean.

console.log(Boolean(0));

const money = 100;
if (money) {
  console.log("Don't spend it all 😉");
} else {
  console.log('You should get a job!');
};

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
};

const myAge = 18;
if (myAge === 18) {
  console.log('You just became an adult!(strict)');
};

if (myAge == 18) {
  console.log('You just became an adult!(loose)');
};

/* const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
 
if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
};
 
if (favourite !== 23) console.log('Why not 23?'); */

// logical ops
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive..');
};

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive..');
};

// switch statement
const day = 'sunday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend 😁');
    break;
  default:
    console.log('Not a valid day!');
}


if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend 😁');
} else {
  console.log('Not a valid day!');
}

// ternary or conditional operator
const theAge = 42;
theAge >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = theAge >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (theAge >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
};
console.log(drink2);

console.log(`I like to drink ${theAge >= 18 ? 'wine 🍷' : 'water 💧'}`);

// code challenge
const bill = 275;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}.`);