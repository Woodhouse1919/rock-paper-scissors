playerSelection();

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
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    messageDisplay.textContent = 'Lose, Rock & Paper';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    messageDisplay.textContent = 'Win! Rock & Scissors';
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
