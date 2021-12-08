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

function playRound(playerSelection, computerSelection) {
  playerSelection.toLowerCase();
  computerSelection = computerPlay();

  // Rock player selection
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    console.log('tie, rock & rock');
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('lose, rock & paper');
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('win, rock & scissors');
  }
  // Paper player selection
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('win, paper & rock');
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    console.log('tie, paper & paper');
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('lose, paper & scissors');
  }
  // Scissors player selection
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('lose, scissors & rock');
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('win, scissors & paper');
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    console.log('tie, scissors & scissors');
  }
}
