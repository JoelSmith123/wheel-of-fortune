
class Puzzle {
  constructor(currentPuzzle) {
    this.lettersGuessed = [];
    this.currentPuzzle = currentPuzzle
  }

  // compares user input to currentPuzzle correct answer
  checkSolveAttempt(answerString) {
    // if the user input string matches the correct answer string
    if (answerString === this.currentPuzzle.correct_answer)
      return true
  }

  // adds guessed letter(s) to lettersGuessed array on submit event
  checkGuessedLetters(letterArray) {
    letterArray.forEach(letter => {
      return this.lettersGuessed.push(letter)
    })
  }

}

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}

