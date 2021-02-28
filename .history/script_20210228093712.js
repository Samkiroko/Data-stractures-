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

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex]], this.mainMenu[mainIndex];
  // },

  // oderDelivery: function ({ starterIndex }) {
  //   console.log(obj);
  // },
  // restaurant.oderDelivery({
  //   time: '22:30',
  //   address: 'via del sole, 21',
  //   mainIndex: 2,
  //   starterIndex:2,
  // })

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasts with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// use any data type, return any data type short-circuiting
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuest = 0;
const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1);
const guests2 = restaurant.numGuest || 10;
console.log(guests2);

console.log('---AND----');

//  destructuring
// const arr = [1, 2, ...[4, 3]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, ...otherFood);

// // objects

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(5, 6, 7, 8, 8, 9, 6);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mush', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mush');
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Githeri'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets . Not objects
// const str = 'Samuelkiroko';
// const letters = [...str];
// console.log(letters);
// console.log(...str);

// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt("Let's make pasta! Ingredient 2?"),
// //   prompt("Let's make pasta! Ingredient 3?"),
// // ];

// // console.log(ingredients);

// // // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // restaurant.orderPasta(...ingredients);

// // objects
// const newRestaurant = { ...restaurant, founder: 'guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHoursHours: hours,
// //   categories: tags,
// // } = restaurant;
// // console.log(restaurantName, hours, tags);

// // const { menu = [], starterMenu: starter = [] } = restaurant;
// // console.log(menu, starter);

// // // Mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };
// // ({ a, b } = obj);
// // console.log(a, b);

// // // nested objects
// // const {
// //   fri: { open, close },
// // } = openingHours;
// // console.log(open, close);

// // destructuring
// // const [a, b] = restaurant.categories;
// // console.log(a, b);
// // let [a, , , b] = restaurant.categories;
// // // console.log(a, b); //Italian Organic

// // [a, b] = [b, a];
// // console.log(a, b); // Organic Italic

// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // // Nested destructuring
// // const nested = [2, 4, [5, 6]];
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);
// // // Default values
// // const [p, q, r] = [8, 9];
// // console.log(p, q, r);
