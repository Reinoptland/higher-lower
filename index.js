// take input from user, argv is an array of strings, we want the 3rd element
var userInput = parseInt(process.argv[2]);
// hardcoding 7 as number to guess, stroin in a variable
var numberToGuess = 7;
var min = 1;
var max = 50;

console.log("input:", userInput);
console.log("number to guess:", numberToGuess);
console.log("min", min, "max", max);
console.log(userInput < numberToGuess); // 1
// prediction: false

if (userInput < min || userInput > max || isNaN(userInput)) {
  // 4
  console.log(
    `This number is invalid, please guess a number between ${min} and ${max}`
  );

  process.exit();
}

if (userInput < numberToGuess) {
  console.log("You should guess a higher number");
} else if (userInput > numberToGuess) {
  console.log("You should guess a lower number");
} else if (userInput === numberToGuess) {
  console.log("CORRECT it was", numberToGuess);
} else {
  console.log("Error");
}

// How many boolean expressions are in this code
// a statement, that resolves to true or false
