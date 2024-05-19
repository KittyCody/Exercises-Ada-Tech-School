const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error..would you type 'rock' , 'paper' or 'scissors' ?");
  }
};
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("It's a tie !");
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    console.log("The computer wins !");
  } else if (userChoice === "paper" && computerChoice === "rock") {
    console.log("You win !");
  } else if (userChoice === "rock" && computerChoice === "paper") {
    console.log("The computer wins !");
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    console.log("You win !");
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    console.log("The computer wins !");
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    console.log("You win !");
  }
  return;
}
function playGame() {
  let userChoice = getUserChoice("paper" || "rock" || "scissors");
  let computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  determineWinner(userChoice, computerChoice);
}
console.log(playGame());
playGame();
