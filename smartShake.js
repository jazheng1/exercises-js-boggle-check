let process = require('process')

function print(str){
  process.stdout.write(str);
}

function dice(){
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
  ]
  let count = 0;
  let scrambledLetters = '';
  for(let i = 0; i < arrayOfDice.length; i++) {
    for(let j = 0; j < 1; j++){
      let randomLetter = arrayOfDice[i].charAt(Math.floor(Math.random() * arrayOfDice[i].length));
      scrambledLetters = scrambledLetters + randomLetter;
    }
    print(scrambledLetters);
    scrambledLetters = '';
    count = count + 1;
    if(count === 4){
      console.log();
      count = 0;
    }
  }
  return scrambledLetters;
}

dice();
