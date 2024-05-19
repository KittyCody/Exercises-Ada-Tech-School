// // make a function that gives the number of matches to withdraw

// // ask the user to choose a number of matches to withdraw from the number of given matches.

// Limit the number of matches to withdraw to a number between 1 and 6 and determine a winner.

// add a second player

// let other players join the game in multiplayer mod.

let matchesInTotal = 50;

function matchesToWithdraw(numOfMatchesToWithdraw) {
  matchesInTotal = matchesInTotal - numOfMatchesToWithdraw;
}

function matchesWithdrewByUser(input) {
  const userInput = parseInt(
    prompt("Player 1: Enter a number between 1 and 6")
  );

  if (
    isNaN(input) &&
    userInput > 0 &&
    userInput < 7 &&
    userInput <= matchesInTotal
  ) {
    alert(
      `Player 1: You withdrew ${userInput} matches. Remaining matches: ${
        matchesInTotal - userInput
      }`
    );

    matchesToWithdraw(userInput);

    if (matchesInTotal > 0) {
      secondPlayer();
    } else {
      alert("Player 1 wins! Congratulations!");
    }
  } else {
    alert("Please enter a valid number between 1 and 6!");
  }
}

function secondPlayer() {
  const userInput = parseInt(
    prompt("Player 2: Enter a number between 1 and 6")
  );

  if (
    !isNaN(userInput) &&
    userInput > 0 &&
    userInput < 7 &&
    userInput <= matchesInTotal
  ) {
    alert(
      `Player 2: You withdrew ${userInput} matches. Remaining matches: ${
        matchesInTotal - userInput
      }`
    );

    matchesToWithdraw(userInput);

    if (matchesInTotal > 0) {
      matchesWithdrewByUser();
    } else {
      alert("Player 2 wins! Congratulations!");
    }
  } else {
    alert("Please enter a valid number between 1 and 6!");
  }
}

matchesWithdrewByUser();
