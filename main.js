function computerPlay() {
  let selection = Math.ceil(Math.random() * 3);

  if (selection === 1) {
    console.log('Rock');
  } else if (selection === 2) {
    console.log('Paper');
  } else if (selection === 3) {
    console.log('Scissors');
  }
}


