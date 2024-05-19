function askNumber() {
  let givenNumber = prompt("Guess the number..?");
  givenNumber = Number(givenNumber);
  return givenNumber;
}

const targetNumber = 22;

function didIWin(givenNumber) {
  if (givenNumber < targetNumber) {
    alert("Nice try! But the number is higher ! ;)");
    return false;
  } else if (givenNumber > targetNumber) {
    alert("Nice try! But the number is lower ! :P");
    return false;
  } else {
    alert("Bravo ! You guessed the number! Good job! :D");
    return true;
  }
}

function gamePlay() {
  let number = askNumber();
  while (didIWin(askNumber) === false) {
    number = askNumber();
  }
  return;
}

gamePlay();
