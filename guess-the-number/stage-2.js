let minRange = 0;
let maxRange = 50;
let attempts = 1;
function askNumber(player) {
  let givenNumber = prompt(
    `(${player}) : Entrez un nombre entre ${minRange} et ${maxRange}.`
  );
  givenNumber = Number(givenNumber);
  return givenNumber;
}
function didIWin(givenNumber, numberToGuess) {
  if (givenNumber < numberToGuess) {
    alert("Nice try ! But the number is higher!");
    return false;
  } else if (givenNumber > numberToGuess) {
    alert("Nice try ! But the number is lower !");
    return false;
  } else {
    alert("Bravo ! You guessed the Number !");
    return true;
  }
}
function gamePlay() {
  let numberToGuess = askNumber("Player 1");
  while (!didIWin(askNumber("Player 2"), numberToGuess)) {
    attempts++;
  }
  alert(`Congratulations ! You guessed the number in ${attempts} tries.`);
  alert("End of the game ! Thanks for participating ! :p".toUpperCase());
}
gamePlay();
