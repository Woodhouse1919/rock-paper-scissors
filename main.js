playerSelection();
let playerScore = 0;
let computerScore = 0;

// Event listener for user making a selection
function playerSelection() {
  const gameButton = document.querySelectorAll('.selection');

  gameButton.forEach((item) => {
    item.addEventListener('click', (e) => {
      console.log(`User: ${e.target.textContent}`);
      const playerSelection = e.target.textContent.toLowerCase();
      playRound(playerSelection);
    });
  });
}

// Generates random selection for computer
function computerPlay() {
  let selection = Math.ceil(Math.random() * 3);

  if (selection === 1) {
    console.log('Computer: Rock');
    return 'rock';
  } else if (selection === 2) {
    console.log('Computer: Paper');
    return 'paper';
  } else if (selection === 3) {
    console.log('Computer: Scissors');
    return 'scissors';
  }
}

function playRound(input) {
  playerSelection = input;
  computerSelection = computerPlay();
  const messageDisplay = document.querySelector('h3');

  // Rock player selection
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    messageDisplay.textContent = 'Tie, Rock & Rock';
    scoreKeeper(false, false)
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    messageDisplay.textContent = 'Lose, Rock & Paper';
    scoreKeeper(false, true)
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    messageDisplay.textContent = 'Win! Rock & Scissors';
    scoreKeeper(true, false)
  }
  // Paper player selection
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    messageDisplay.textContent = 'Win! Paper & Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    messageDisplay.textContent = 'Tie, Paper & Paper';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    messageDisplay.textContent = 'Lose, Paper & Scissors';
  }
  // Scissors player selection
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    messageDisplay.textContent = 'Lose, Scissors & Rock';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    messageDisplay.textContent = 'Win! Scissors & Paper';
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    messageDisplay.textContent = 'Tie, Scissors & Scissors';
  }
  // Other player selection
  else {
    console.log('User did not select rock, paper, or scissors');
  }
}

function scoreKeeper(player, cpu) {
  if (player === true) {
    playerScore++
    console.log(`Player = ${playerScore}`);
  } else if (cpu === true) {
    computerScore++
    console.log(`Computer = ${computerScore}`);
  } else if (player === false && cpu === false) {
    console.log('Tie');
  }
}
