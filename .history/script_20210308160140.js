// // 'use strict';

// // // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   //   //   // order: function (starterIndex, mainIndex) {
//   //   //   //   return [this.starterMenu[starterIndex]], this.mainMenu[mainIndex];
//   //   //   // },

//   //   //   // oderDelivery: function ({ starterIndex }) {
//   //   //   //   console.log(obj);
//   //   //   // },
//   //   //   // restaurant.oderDelivery({
//   //   //   //   time: '22:30',
//   //   //   //   address: 'via del sole, 21',
//   //   //   mainIndex: 2,
//   //   //   starterIndex:2,
//   //   // })

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious pasts with ${ing1}, ${ing2} and ${ing3}.`
//     );
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// // // property values
// // const entries = Object.entries(restaurant.openingHours);
// // console.log(entries);

// // for (const [key, { open, close }] of entries) {
// //   console.log(`On ${key} we open at ${open} and close at ${close}`);
// // }

// // // use any data type, return any data type short-circuiting
// // console.log(3 || 'jonas');
// // console.log('' || 'jonas');
// // console.log(true || 0);
// // console.log(undefined || null);

// // restaurant.numGuest = 0;
// // const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
// // console.log(guests1);
// // const guests2 = restaurant.numGuest || 10;
// // console.log(guests2);

// // console.log('---AND----');
// // console.log(0 && 'Jonas');
// // console.log('Hello' && 23 && null); //null it falsely

// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('Mush', 'spinach');
// // }
// // restaurant.orderPizza && restaurant.orderPizza('mush', 'spinach');

// // restaurant.numGuest = 0;
// // const guests3 = restaurant.numGuest || 10;
// // console.log(guests3);
// // //  Nullish: null and undefined (NOT 0 or '')
// // const guestCorrect = restaurant.numGuest ?? 10;
// // console.log(guestCorrect);

// //  destructuring
// // const arr = [1, 2, ...[4, 3]];

// // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// // const [pizza, risotto, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];
// // console.log(pizza, risotto, ...otherFood);

// // // objects

// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // // functions
// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) {
// //     sum += numbers[i];
// //   }
// //   console.log(sum);
// // };

// // add(5, 6, 7, 8, 8, 9, 6);

// // const x = [23, 5, 7];
// // add(...x);

// // restaurant.orderPizza('mush', 'onion', 'olives', 'spinach');
// // restaurant.orderPizza('mush');
// // const arr = [7, 8, 9];
// // const badNewArr = [1, 2, arr[1], arr[2]];
// // console.log(badNewArr);

// // const newArr = [1, 2, ...arr];
// // console.log(newArr);

// // const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Githeri'];
// // console.log(newMenu);

// // const mainMenuCopy = [...restaurant.mainMenu];

// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(menu);

// // // Iterables: arrays, strings, maps, sets . Not objects
// // const str = 'Samuelkiroko';
// // const letters = [...str];
// // console.log(letters);
// // console.log(...str);

// // // const ingredients = [
// // //   prompt("Let's make pasta! Ingredient 1?"),
// // //   prompt("Let's make pasta! Ingredient 2?"),
// // //   prompt("Let's make pasta! Ingredient 3?"),
// // // ];

// // // console.log(ingredients);

// // // // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // // restaurant.orderPasta(...ingredients);

// // // objects
// // const newRestaurant = { ...restaurant, founder: 'guiseppe' };
// // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = 'Ristorante Roma';
// // console.log(restaurantCopy.name);
// // console.log(restaurant.name);
// // // const { name, openingHours, categories } = restaurant;
// // // console.log(name, openingHours, categories);

// // // const {
// // //   name: restaurantName,
// // //   openingHoursHours: hours,
// // //   categories: tags,
// // // } = restaurant;
// // // console.log(restaurantName, hours, tags);

// // // const { menu = [], starterMenu: starter = [] } = restaurant;
// // // console.log(menu, starter);

// // // // Mutating variables
// // // let a = 111;
// // // let b = 999;
// // // const obj = { a: 23, b: 7, c: 14 };
// // // ({ a, b } = obj);
// // // console.log(a, b);

// // // // nested objects
// // // const {
// // //   fri: { open, close },
// // // } = openingHours;
// // // console.log(open, close);

// // // destructuring
// // // const [a, b] = restaurant.categories;
// // // console.log(a, b);
// // // let [a, , , b] = restaurant.categories;
// // // // console.log(a, b); //Italian Organic

// // // [a, b] = [b, a];
// // // console.log(a, b); // Organic Italic

// // // const [starter, mainCourse] = restaurant.order(2, 0);
// // // console.log(starter, mainCourse);

// // // // Nested destructuring
// // // const nested = [2, 4, [5, 6]];
// // // const [i, , [j, k]] = nested;
// // // console.log(i, j, k);
// // // // Default values
// // // const [p, q, r] = [8, 9];
// // // console.log(p, q, r);

// /*
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends )!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

// */

// // const game = {
// //   team1: 'Bayern Munich',
// //   team2: 'Borrussia Dortmund',
// //   players: [
// //     [
// //       'Neuer',
// //       'Pavard',
// //       'Martinez',
// //       'Alaba',
// //       'Davies',
// //       'Kimmich',
// //       'Goretzka',
// //       'Coman',
// //       'Muller',
// //       'Gnarby',
// //       'Lewandowski',
// //     ],
// //     [
// //       'Burki',
// //       'Schulz',
// //       'Hummels',
// //       'Akanji',
// //       'Hakimi',
// //       'Weigl',
// //       'Witsel',
// //       'Hazard',
// //       'Brandt',
// //       'Sancho',
// //       'Gotze',
// //     ],
// //   ],
// //   score: '4:0',
// //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// //   date: 'Nov 9th, 2037',
// //   odds: {
// //     team1: 1.33,
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };

// // //  1
// // const [players1, players2] = game.players;
// // console.log(game.players);

// // //2
// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // //3
// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // //4
// // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// // console.log(players1Final);
// // // 5
// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;
// // console.log(team1, draw, team2);

// // //6
// // const printGoals = function (...players) {
// //   console.log(`${players.length} goals were scored`);
// // };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// // printGoals(...game.scored);

// // //7
// // team1 > team2 && console.log('Team 1 is more likely to win');
// // team1 < team2 && console.log('Team 2 is more likely to win');

// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // for (const item of menu) console.log(item);
// // for (const [i, el] of menu.entries()) {
// //   console.log(`${i + 1}: ${el}`);
// // }

// // console.log(restaurant.openingHours);

// // Rounding a number to X decimal places

// // function roundTo(base, precision) {
// //   let m = Math.pow(10, precision);
// //   let n = Math.round(base * m) / m;
// //   return n;
// // }

// // console.log(roundTo(3.47575, 2));

// // const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // for (const day of days) {
// //   const open = restaurant.openingHours[day]?.open ?? 'close';
// //   console.log(`0n ${days}, we open at ${open}`);
// // }

// // // methods
// // console.log(restaurant.order?.(0, 1) ?? 'Methods doest not exist');

// // // arrays
// // const users = [{ name: 'Sam', email: 'sam@gmail.com' }];
// // console.log(users[0].name ?? 'user array empty');

// // if (user.length > 0) console.log(users[0].name);
// // else console.log('empty');

// // const properties = Object.keys(openingHours);
// // console.log(properties);

// // for (const day of Object.keys(openingHours)) console.log(day);

// // property values

// // challenge 2

// /*
// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }
// GOOD LUCK
// */

// // const game = {
// //   team1: 'Bayern Munich',
// //   team2: 'Borrussia Dortmund',
// //   players: [
// //     [
// //       'Neuer',
// //       'Pavard',
// //       'Martinez',
// //       'Alaba',
// //       'Davies',
// //       'Kimmich',
// //       'Goretzka',
// //       'Coman',
// //       'Muller',
// //       'Gnarby',
// //       'Lewandowski',
// //     ],
// //     [
// //       'Burki',
// //       'Schulz',
// //       'Hummels',
// //       'Akanji',
// //       'Hakimi',
// //       'Weigl',
// //       'Witsel',
// //       'Hazard',
// //       'Brandt',
// //       'Sancho',
// //       'Gotze',
// //     ],
// //   ],
// //   score: '4:0',
// //   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// //   date: 'Nov 9th, 2037',
// //   odds: {
// //     team1: 1.33,
// //     x: 3.25,
// //     team2: 6.5,
// //   },
// // };

// // // challenge 1
// // for (const [i, player] of game.scored.entries())
// //   console.log(`Goal ${i + 1}: ${player}`);

// // // #2
// // const odds = Object.values(game.odds);
// // let average = 0;
// // for (const odd of odds) average += odd;
// // average /= odds.length;

// // function roundTo(base, precision) {
// //   let m = Math.pow(10, precision);
// //   let averageRoundOf = Math.round(base * m) / m;
// //   return averageRoundOf;
// // }
// // console.log(roundTo(average, 4));

// // // #3
// // /*
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // */

// // for (const [team, odd] of Object.entries(game.odds)) {
// //   // console.log(team, odd);
// //   const teamstr = team === 'x' ? 'draw' : `victory ${game[team]}`;
// //   console.log(`Odd of ${teamstr} ${odd}`);
// // }

// // const ordersSet = new Set([
// //   'Pasta',
// //   'Pizza',
// //   'Pizza',
// //   'Risotto',
// //   'Pasta',
// //   'Pizza',
// // ]);
// // console.log(ordersSet);

// // console.log(new Set('Samuel'));

// // console.log(ordersSet.size);
// // console.log(ordersSet.has('Pizza'));
// // ordersSet.add('Garlic Bread');
// // console.log(ordersSet);
// // ordersSet.delete('Risotto');
// // console.log(ordersSet);
// // // ordersSet.clear();
// // // console.log(ordersSet);

// // for (const order of ordersSet) console.log(order);

// // //  example of use case
// // const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// // const staffUnique = [...new Set(staff)];
// // console.log(staffUnique);
// // console.log(staffUnique.length);

// // //  maps

// // const rest = new Map();
// // rest.set('name', 'Classico Iteliano');
// // rest.set(1, 'Firenze, Italy');
// // console.log(rest.set(2, 'Lisbon, Portugal'));

// // rest
// //   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian ', 'Organic'])
// //   .set('open', 11)
// //   .set('close', 23)
// //   .set(true, 'we are open :D')
// //   .set(false, 'we are closed');

// // console.log(rest.get('name'));
// // console.log(rest.get(true));
// // console.log(rest.get(1));

// // const time = 8;
// // console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // console.log(rest.has('categories'));
// // rest.delete(2);
// // console.log(rest);
// // console.log(rest.size);
// // // rest.clear();
// // console.log(rest);

// const question = new Map([
//   ['question', 'What is the best programming language in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// // convert object to map
// // console.log(Object.entries(openingHours));
// // const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('your answer'));
// // console.log(answer);

// // console.log(question.get(question.get('correct') === answer));

// // converting maps to an array

// console.log([...question]);

/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
hether it's in the first half or 
GOOD LUCK
*/

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, ' Substitution'],
//   [47, '⚽ GOAL'],
//   [61, ' Substitution'],
//   [64, ' Yellow card'],
//   [69, ' Red card'],
//   [70, ' Substitution'],
//   [72, ' Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, ' Yellow card'],
// ]);

// // 1. Create an array 'events' of the different game events that happened (no
// // duplicates)

// // const events = new Set(gameEvents);
// // console.log(events);

// console.log(gameEvents.values());
// // const events = new Set(gameEvents.values());
// // console.log(events);
// // convert to an arrays
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // no.2
// gameEvents.delete(64);

// // no.3
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened, on average, every ${time / gameEvents.size}`);

// // no.4
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// const airline = 'Tap Air Portugal';
// const plane = 'A320';

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 9));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(0, airline.indexOf('  ') + 1));
// console.log(airline.slice(0, airline.indexOf(-2)));
// const checkMiddleSeat = function (seat) {
//   // B and E are Middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 🙊');
//   else console.log('You got Lucky 😂');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Samuel'));

// console.log(airline.toLocaleLowerCase());
// console.log(airline.toUpperCase());

// //  fix capitalization name
// const passenger = 'sAMuel';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);
// console.log(passengerLower.slice(1));

// // Comparing emails
// const email = 'hello@samuel.io';
// const loginEmail = ' Hello@Samuel.io';

// // const lowerEmail = loginEmail.toLocaleLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing part of strings
// const priceGB = '288,97€';
// const priceUs = priceGB.replace('€', '$').replace(',', '.');
// console.log(priceUs);

// const announcement = 'All passenger come to boarding door 23.Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

// // Booleans
// const plane1 = 'A320neo';
// console.log(plane1.includes('A320'));
// console.log(plane1.startsWith('A320'));
// console.log(plane1.endsWith('A320'));

// // practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLocaleLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not welcomed');
//   } else {
//     console.log('welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and gun for protection ');

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith devis');
capitalizeName('samuel kiroko njenga');
capitalizeName('joyce wanjiku kiroko');

//  padding
const message = 'Go to gate 23!';

console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = number => {
  const str = number + '';
  const last = str.slice(-4);
};

maskCreditCard(43378534324877987);
maskCreditCard('43378534324877987');
