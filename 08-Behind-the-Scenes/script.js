'use strict';

// scoping
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating new var with same name as outer scope's var
      const firstName = 'Steven';

      // reassigning outer scope's var
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial); // var is function scoped
    // console.log(add(2, 3)); only visible without strict mode
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// hoisting practice
// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Claudia';
let job = 'programmer';
const year = 1982;

// functions

console.log(addDec(2, 3));
//console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDec(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

// THIS Keyword practice
// global
//console.log(this);

// function
const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
  //console.log(this);
};
calcAge1(1991);

// arrow function
const calcAge1Arrow = birthYear => {
  console.log(2037 - birthYear);
  //console.log(this);
};
calcAge1Arrow(1991);

// object
const claudia = {
  year: 1982,
  calcAge1: function () {
    console.log(this);
    //console.log(2037 - this.year);
  },
};

claudia.calcAge1();

const giulia = {
  year: 1991,
};

giulia.calcAge1 = claudia.calcAge1;
giulia.calcAge1(); // method borrowing

const f = claudia.calcAge1;
f(); // undefined because it is not attached to any object

// var firstName1 = 'Giulia';

const claudia2 = {
  firstName1: 'Claudia',
  year: 1982,
  calcAge1: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName1}`);
  },
};
claudia2.greet();
claudia2.calcAge1();

// arguments keyword
const addExpr1 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr1(2, 5);
addExpr1(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
//addArrow(2, 5, 8);

// primitives
let age = 42;
let oldAge = age;
age = 43;
console.log(age);
console.log(oldAge);

const me1 = {
  name: 'Claudia',
  age: 42,
};
const friend = me1;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me1);

// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};

// copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
