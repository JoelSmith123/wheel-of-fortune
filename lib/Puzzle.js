
class Puzzle {
  constructor(currentPuzzle) {
    this.currentPuzzle = currentPuzzle
  }

  // compares user input to currentPuzzle correct answer
  checkSolveAttempt(answerString) {
    // if the user input string matches the correct answer string
    if (answerString === this.currentPuzzle.correct_answer)
      return true
  }

}

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}

