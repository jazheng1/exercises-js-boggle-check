function newBoggleBoard() {
  return [
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
  ];
}

function shuffle(array) {
  for (let x = 0; x < 16; x++) {
    let y = Math.floor(Math.random() * (x + 1));
    [array[x], array[y]] = [array[y], array[x]];
  }
}

// source for shuffle: http://javascript.info/task/shuffle

/**
 * Prints out a boggle board.
 */
function printBoggleBoard(boggleBoard) {
  for (let row of boggleBoard) {
    console.log(row.join(' '));
  }
}

/**
 * Shake a boggle board and fill it with letters.
 */
function shake(boggleBoard) {
  // This is your job. :)
  let arrayOfDice = [
    'AAEEGN',
    'ELRTTY',
    'AOOTTW',
    'ABBJOO',
    'EHRTVW',
    'CIMOTU',
    'DISTTY',
    'EIOSST',
    'DELRVY',
    'ACHOPS',
    'HIMNQU',
    'EEINSU',
    'EEGHNW',
    'AFFKPS',
    'HLNNRZ',
    'DEILRX',
  ];

  let letterArray = [];
  for (let i = 0; i < arrayOfDice.length; i++) {
    for (let j = 0; j < 1; j++) {
      let randomLetter = arrayOfDice[i].charAt(Math.floor(Math.random() * arrayOfDice[i].length));
      if (randomLetter === 'Q') {
        randomLetter = 'Qu';
      }
      letterArray.push(randomLetter);
    }
  }

  shuffle(letterArray);

  let counter = 0;
  for (let z = 0; z < boggleBoard.length; z++) {
    for (let y = 0; y < boggleBoard[z].length; y++) {
      boggleBoard[z][y] = letterArray[counter];
      counter++;
    }
  }

  return boggleBoard;
}
let board = newBoggleBoard();

shake(board);

printBoggleBoard(board);
