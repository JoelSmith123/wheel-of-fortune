
class Round {
  constructor(newPuzzle) {
    this.newPuzzle = newPuzzle;
  }


  getNewPuzzle() {
    var randomNumber = Math.floor(Math.random() * Object.keys(data.puzzles).length);
    var puzzleAnswersName = Object.keys(data.puzzles)[randomNumber];
    var randomObjectAnswer = Math.floor(Math.random() * data.puzzles[puzzleAnswersName].puzzle_bank.length)
    var randomPuzzle = data.puzzles[puzzleAnswersName].puzzle_bank[randomObjectAnswer]
    this.newPuzzle = new Puzzle(randomPuzzle);
    console.log(this.newPuzzle);
    return this.newPuzzle;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Round;
}