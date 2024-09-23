'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious past with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sol, 21',
  starterIndex: 1,
});

// destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values in objects
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables in objects
let ab = 111;
let bc = 999;
const abc = { ab: 23, bc: 7, cd: 14 };

({ ab, bc } = abc);
console.log(ab, bc);

// nested objects
const {
  fri: { open: o, close: cl },
} = openingHours;
console.log(o, cl);

// destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// practice assignments
// 1.1
const books = ['IT', '1984'];

// const firstBook = books[0];
// const secondBook = books[1];
// console.log(firstBook, secondBook);
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

// 1.2
const [, , thirdBook] = books;
console.log(thirdBook);

// 1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(ratings);

// 1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// 2.1
const books1 = [
  {
    title: 'IT',
    author: ['Stephen King', 'Kevin Wayne'],
    ISBN: 158785,

    thirdParty: {
      goodreads: {
        rating: 4.41, // <-- HERE
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
  },
  {
    title: '1984',
    author: 'Orwell',
    ISBN: 254785,

    thirdParty: {
      goodreads: {
        rating: 3.89, // <-- HERE
        ratingsCount: 1456,
        reviewsCount: 56,
        fiveStarRatingCount: 789,
        oneStarRatingCount: 9,
      },
    },
  },
];

const { title, author, ISBN } = books1[0];
console.log(title, author, ISBN);

// 2.2
const { keyword: tags1 } = books[0];

// 2.3
//const { language, programmingLanguage = 'unknown' } = books[6];

// 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books1[0]); // assignment, not declaration
console.log(bookTitle, bookAuthor);

// 2.5
// Each book object has a deeply nested rating property as illustrated below:

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books1[0];
console.log(bookRating);

//2.6
printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});
// ex 1
function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}
// ex 2
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}

// SPREAD operator
const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr1];
console.log(newArr);

// building a new array, not manipulating the original one
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 or more arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

const str1 = 'Claudia';
const letters = [...str1, '', 'DT'];
console.log(letters);
console.log(...str1);
// cannot be used with literals
// console.log(`${...str1} De Tata`);

// real world example
const ingredients = [
  //   prompt("Let's make pasta!Ingredient 1?"),
  //   prompt('Ingredient 2?'),
  //   prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta[(ingredients[0], ingredients[1], ingredients[2])];
// better solution
restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// 1. destructuring
// SPREAD because on right side of =
const arr2 = [1, 2, ...[3, 4]];

// REST because on left side of =
const [as, bs, ...others] = [1, 2, 3, 4, 5];
console.log(as, bs, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2. functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const xs = [23, 5, 7];
add(...xs);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

//3.1
const bookAuthors = [...books1[0].author, ...books1[1].author];
console.log(bookAuthors);

//3.2
function spellWord(word) {
  console.log(...word);
}

spellWord('JavaScript');

//4.1
// const [mainKeyword, ...rest] = books[0].keyword;
// console.log(mainKeyword, rest);

//4.2
const { publisher: bookPublisher, ...restOfTheBook } = books1[1];
console.log(bookPublisher, restOfTheBook);

//4.3
function printBookAuthorsCount(title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors`);
}

printBookAuthorsCount(books1[0].title, ...books1[0].author);
