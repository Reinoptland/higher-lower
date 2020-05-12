var userInput = parseInt(process.argv[2]);
var numberToGuess = 7;
var min = 1;
var max = 50;

console.log("input:", userInput);
console.log("number to guess:", numberToGuess);
console.log("min", min, "max", max);

console.log(userInput < numberToGuess);
// prediction: false

if (userInput < numberToGuess) {
  console.log("You should guess a higher number");
}

if (userInput > numberToGuess) {
  console.log("You should guess a lower number");
}

if (userInput === numberToGuess) {
  console.log("CORRECT it was", numberToGuess);
}
