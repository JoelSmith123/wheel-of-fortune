
class Puzzle {
  constructor(currentPuzzle) {
    this.currentPuzzle = currentPuzzle
  }

  checkSolveAttempt(answerString) {
    if (answerString === this.currentPuzzle.correct_answer)
      return true
  }

}

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}

