playerSelection();
const playerDisplay = document.querySelector('.playerscore p');
const computerDisplay = document.querySelector('.computerscore p');
const messageDisplay = document.querySelector('h3');
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

  // Rock player selection
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    messageDisplay.textContent = 'Tie, Rock & Rock';
    scoreKeeper(false, false);
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    messageDisplay.textContent = 'Lose, Rock & Paper';
    scoreKeeper(false, true);
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    messageDisplay.textContent = 'Win! Rock & Scissors';
    scoreKeeper(true, false);
  }
  // Paper player selection
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    scoreKeeper(true, false);
    messageDisplay.textContent = 'Win! Paper & Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    scoreKeeper(false, false);
    messageDisplay.textContent = 'Tie, Paper & Paper';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    scoreKeeper(false, true);
    messageDisplay.textContent = 'Lose, Paper & Scissors';
  }
  // Scissors player selection
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    scoreKeeper(false, true);
    messageDisplay.textContent = 'Lose, Scissors & Rock';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    scoreKeeper(true, false);
    messageDisplay.textContent = 'Win! Scissors & Paper';
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    scoreKeeper(false, false);
    messageDisplay.textContent = 'Tie, Scissors & Scissors';
  }
  // Other player selection
  else {
    console.log('User did not select rock, paper, or scissors');
  }
  gameOver();
}

function scoreKeeper(player, cpu) {
  if (player === true) {
    playerScore++;
    playerDisplay.textContent = `Player: ${playerScore}`;
    console.log(`Player = ${playerScore}`);
  } else if (cpu === true) {
    computerScore++;
    computerDisplay.textContent = `Computer: ${computerScore}`;
    console.log(`Computer = ${computerScore}`);
  } else if (player === false && cpu === false) {
    console.log('Tie');
  }
}

function gameOver() {
  if (playerScore === 5) {
    alert('Congratulations You Won!');
    reset();
  } else if (computerScore === 5) {
    alert('Sorry, You Lose');
    reset();
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  messageDisplay.textContent = `Good Luck! First to 5 Wins`;
  playerDisplay.textContent = `Player: ${playerScore}`;
  computerDisplay.textContent = `Computer: ${computerScore}`;
}
