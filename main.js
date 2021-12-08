function computerPlay() {
  let selection = Math.ceil(Math.random() * 3);

  if (selection === 1) {
    console.log('rock');
    return 'rock';
  } else if (selection === 2) {
    console.log('paper');
    return 'paper';
  } else if (selection === 3) {
    console.log('scissors');
    return 'scissors';
  }
}

function playRound() {
  playerSelection = prompt(
    'Please choose rock, paper, or scissors'
  ).toLowerCase();
  computerSelection = computerPlay();

  // Rock player selection
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    alert('tie, rock & rock');
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    alert('lose, rock & paper');
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    alert('win, rock & scissors');
  }
  // Paper player selection
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    alert('win, paper & rock');
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    alert('tie, paper & paper');
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    alert('lose, paper & scissors');
  }
  // Scissors player selection
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    alert('lose, scissors & rock');
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    alert('win, scissors & paper');
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    alert('tie, scissors & scissors');
  }
  // Other player selection
  else {
    alert('User did not select rock, paper, or scissors');
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}
