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
    this.newPuzzle.currentPuzzle.correct_answer = this.newPuzzle.currentPuzzle.correct_answer.toUpperCase()
    return this.newPuzzle;
  }

  findCorrectTile(array, columnNum) {
    array.forEach((letter) => {
      if(letter !== ' ') {
        domUpdates.changeTile(columnNum)
      }
      columnNum += 1
    })
  } 

  changeTileColor(correctAnswer) {
    console.log(correctAnswer)
  if (correctAnswer.length < 15) {
    let column = 14
    let lettersArray = correctAnswer.split('')
    this.findCorrectTile(lettersArray, column)
  } else {
     let column = 0
     let columnOne = 0
     let columnTwo = 14
     let columnThree = 28
     let wordArray = correctAnswer.split(' ');
     wordArray.forEach((word) => {
       let wordLetters = word.split('')
       column += word.length
       if (column < 15) {
         this.findCorrectTile(wordLetters, columnOne)
          columnOne += word.length + 1
          column += 1
       } else if (column > 14 && column < 28) {
         this.findCorrectTile(wordLetters, columnTwo)
         column += 1
         columnTwo += word.length + 1
       } else {
         this.findCorrectTile(wordLetters, columnThree)
         columnThree += word.length + 1
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