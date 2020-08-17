// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * The code for counter1 makes use of a private variable, "counter1", to store the contents of the function counterMaker. Additionally, in counter1 the "count" variable is contianed in the function scope of counterMaker. This means that we can reuse the counterMaker code to create other private variables, each with their own separate instance of the "count" variable and its associated value. The code for counter2 on the other hand does not use a private variable to store the counter function, and the count variable is contained at the global scope. This means that the function cannot be reused as the count variable would be mutable by any function that references that variable.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * The code for counter1 uses a closure. This is because the function "counter" needs to reach outside its functional scope to access the value of "count", which is at the functional scope of counterMaker. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * The code for counter1 would be preferable in a situation where we want to store multiple counters, each with their own unique values, using the same code, but stored under different private variables, e.g. counter1, counter2, counter3. The code for counter2 would be preferable in a situation where we want to have a single counter, "count", that is accessible at the global scope.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();
// const counter3 = counterMaker();

// console.log(counter1());
// console.log(counter1());
// console.log(counter3());

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

// console.log(counter2());
// console.log(counter2());
// count = 3;
// console.log(counter2());


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    return (Math.round(Math.random() * 2));    

}

inning();

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(num, inning){
  let homeScore = [];
  let awayScore = [];
  for (let i = 0; i < num; i++) {
  homeScore.push(inning());
  awayScore.push(inning());
}
return {"Home": homeScore.reduce((a, b) => a + b), "Away": awayScore.reduce((a, b) => a + b)};
}

console.log(finalScore(9, inning));

// console.log(finalScore(inning));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function inning1(){

  return (Math.round(Math.random() * 2));    

}

function getInningScore(num, callback) {
  let homeScores = [];
  let awayScores = [];
  for (let i = 0; i < num; i++) {
    homeScores.push(callback());
    // awayScore.push(inning());
    homeScores.reduce((a, b) => a + b);
    // awayScore.reduce((a, b) => a + b);
  }
  return homeScores
}

console.log(getInningScore(9, inning1));



// function scoreboard(num, inning, getInningScore) {
//   let scoreBoard = [];
//   for (let i = 0; i < num; i++) {
//     scoreBoard.push(getInningScore(num, inning));
//   }
//   return scoreBoard
// }

// console.log(scoreboard(9, inning1, getInningScore));
