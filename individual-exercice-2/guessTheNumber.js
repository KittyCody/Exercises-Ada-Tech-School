function guessNumber() {
  let givenNumber = prompt("Would you guess the number ?");
  if (givenNumber === null || givenNumber === " " || isNaN) {
    alert("Would you type a valid number ?");
  } else return givenNumber;
}
guessNumber();
guessNumber();

let givenNumber = guessNumber;
function didIWin(givenNumber) {
  if (givenNumber < 22) {
    return "The number is higher !";
  } else if (givenNumber > 22) {
    return "The number is smaller !";
  } else {
    return "Bravo ! the number is 22 ! ;) ";
  }
}
didIWin();

function didIGuess(number) {
    if(number)

function askForNumber() {
  const givenNumber = prompt("Guess the number ! :");
  return givenNumber;
}

fction guessNumber() {
  let givenNumber = prompt("Guess the number?");
  if (ungivenNumber === null || givenNumber === " " || isNaN(givenNumber)) {
    alert("Please, type a valid number.");
    return guessNumber();
  } else {
    return givenNumber;
  }
}

let guessedNumber = guessNumber();

function didIWin(guessedNumber) {
  const targetNumber = 22;
  if (guessedNumber < targetNumber) {
    alert("The number is higher!");
    return guessNumber;
  } else if (guessedNumber > targetNumber) {
    alert("The number is smaller!");
    return guessNumber;
  } else {
    return "Bravo! The number is 22!";
  }
}

alert(didIWin(guessedNumber));
