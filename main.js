// Event listener for user making a selection
const playerSelection = document.querySelectorAll('.selection')
playerSelection.forEach(item => {
  item.addEventListener('click', (e) => {
    console.log(`User: ${e.target.innerHTML}`);
    return e.target.innerHTML.toLowerCase();
  })
})


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



function playRound() {
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
  // Other player selection
  else {
    console.log('User did not select rock, paper, or scissors');
  }
}

function game() {}
