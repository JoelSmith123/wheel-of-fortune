class Round {
  constructor(newPuzzle) {
    this.lettersGuessed = [];
    this.newPuzzle = newPuzzle;
  }


  getNewPuzzle() {
    var randomNumber = Math.floor(Math.random() * Object.keys(data.puzzles).length);
    var puzzleAnswersName = Object.keys(data.puzzles)[randomNumber];
    var randomObjectAnswer = Math.floor(Math.random() * data.puzzles[puzzleAnswersName].puzzle_bank.length)
    var randomPuzzle = data.puzzles[puzzleAnswersName].puzzle_bank[randomObjectAnswer]
    this.newPuzzle = new Puzzle(randomPuzzle);
    console.log(this.newPuzzle.currentPuzzle.correct_answer);
    return this.newPuzzle;
  }

  changeTileColor(array) {
    console.log(array)
  if (array.length < 15) {
    let column = 14
    let stringedArray = array.split('')
      stringedArray.forEach((letter) => {
        console.log(letter)
        console.log(column)
        if(letter !== ' ') {
          domUpdates.changeTile(column)
        }
        column += 1
      })
  } else {
     let column = 0
     let columnOne = 0
     let columnTwo = 14
     let columnThree = 28
     let wordArray = array.split(' ');
     wordArray.forEach((word) => {
       column += word.length
       if (column < 15) {
         let newArray = word.split('')
         newArray.forEach((letter) => {
          console.log(letter)
          console.log(columnOne)
          if(letter !== ' ') {
            domUpdates.changeTile(columnOne)
          }
          columnOne += 1
        })
        columnOne += 1
        column += 1

       } else if (column > 14 && column < 28) {
         let newArray = word.split('')
         newArray.forEach((letter) => {
          console.log(letter)
        console.log(columnTwo)
           if(letter !== ' ') {
            console.log(2)
              domUpdates.changeTile(columnTwo)
          }
          columnTwo += 1
        })
         column += 1
         columnTwo += 1
       } else {
         let newArray = word.split('')
         newArray.forEach((letter) => {
                  console.log(letter)
        console.log(columnThree)
           if(letter !== ' ') {
              domUpdates.changeTile(columnThree)
          }
          columnThree += 1
        })
         columnThree += 1
       }
     })
   }
}

  // adds guessed letter(s) to lettersGuessed array on submit event
  checkGuessedLetters(letter) {
    if (!this.lettersGuessed.includes(letter)) {
      return this.lettersGuessed.push(letter)
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Round;
}