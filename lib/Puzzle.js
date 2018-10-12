
class Puzzle {
  constructor(currentPuzzle) {
    this.lettersGuessed = [];
    this.currentPuzzle = currentPuzzle
  }

  checkAllLetters(answer) {
    // compares user input to currentPuzzle correct answer
    // if the user input string matches the correct answer string
    // return true
  }

  checkLetters(letter) {
    // split correct answer into an array of letters, all lowercase
    // compares user inputed letter to currentPuzzle correct letters
    // if the user guessed letter is in the currentPuzzle correct letters
    // invoke populateLettersToScreen(), pass in letter
    // return true
    // else
    // run error
    // return false
    // run on submit event
  }

  populateLettersToScreen(letter) {
    // populates letters to screen
  }

  checkGuessedLetters() {
    // adds guessed letter(s) to lettersGuessed array on submit event
  }

  // splitCorrectAnswer() {
  //   // splits the correct answer into a useable array
  // }

}

module.exports = Puzzle