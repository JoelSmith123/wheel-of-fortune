
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

  // run on submit event
  checkLetters(letter) {
    // split correct answer into an array of letters, all lowercase
    let answerLettersArray = this.currentPuzzle.correct_answer.toLowerCase().split('')
    console.log(answerLettersArray)
    // compares user inputed letter to currentPuzzle correct letters
    // if the user guessed letter is in the currentPuzzle correct letters
    if (answerLettersArray.includes(letter)) {
      domUpdates.appendGuessToDom(letter, answerLettersArray)
      return true
    } else {
      // run error message
      return false
    }
  }

  populateLettersToScreen(letter) {
    // populates letters to screen
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

