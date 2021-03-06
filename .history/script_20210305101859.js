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

  //   // order: function (starterIndex, mainIndex) {
  //   //   return [this.starterMenu[starterIndex]], this.mainMenu[mainIndex];
  //   // },

  //   // oderDelivery: function ({ starterIndex }) {
  //   //   console.log(obj);
  //   // },
  //   // restaurant.oderDelivery({
  //   //   time: '22:30',
  //   //   address: 'via del sole, 21',
  //   //   mainIndex: 2,
  //   //   starterIndex:2,
  //   // })

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

// property values
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

if (const [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// // use any data type, return any data type short-circuiting
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuest = 0;
// const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guests1);
// const guests2 = restaurant.numGuest || 10;
// console.log(guests2);

// console.log('---AND----');
// console.log(0 && 'Jonas');
// console.log('Hello' && 23 && null); //null it falsely

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mush', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mush', 'spinach');

// restaurant.numGuest = 0;
// const guests3 = restaurant.numGuest || 10;
// console.log(guests3);
// //  Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

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

/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends )!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored

*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //  1
// const [players1, players2] = game.players;
// console.log(game.players);

// //2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// console.log(players1Final);
// // 5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //6
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// //7
// team1 > team2 && console.log('Team 1 is more likely to win');
// team1 < team2 && console.log('Team 2 is more likely to win');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log(restaurant.openingHours);

// Rounding a number to X decimal places

// function roundTo(base, precision) {
//   let m = Math.pow(10, precision);
//   let n = Math.round(base * m) / m;
//   return n;
// }

// console.log(roundTo(3.47575, 2));

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'close';
//   console.log(`0n ${days}, we open at ${open}`);
// }

// // methods
// console.log(restaurant.order?.(0, 1) ?? 'Methods doest not exist');

// // arrays
// const users = [{ name: 'Sam', email: 'sam@gmail.com' }];
// console.log(users[0].name ?? 'user array empty');

// if (user.length > 0) console.log(users[0].name);
// else console.log('empty');

// const properties = Object.keys(openingHours);
// console.log(properties);

// for (const day of Object.keys(openingHours)) console.log(day);

// property values
