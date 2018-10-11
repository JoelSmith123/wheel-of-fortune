const data = require('../lib/data')
const Puzzle = require('../lib/Puzzle')

class Round {
  constructor() {
    this.name = 'Kaylee';
  }


  getNewPuzzle() {
    var randomNumber = Math.floor(Math.random() * Object.keys(data.puzzles).length);
    // Object.keys(data.puzzles) is the list of types of puzzles.
    // randomNumber is a random type of puzzle, represented by its key.
    var puzzleAnswersName = Object.keys(data.puzzles)[randomNumber];
    var randomObjectAnswer = Math.floor(Math.random() * data.puzzles[puzzleAnswersName].puzzle_bank.length)
    var randomPuzzle = data.puzzles[puzzleAnswersName].puzzle_bank[randomObjectAnswer]
    var newPuzzle = new Puzzle(randomPuzzle);
    return newPuzzle;
  }
}

module.exports = Round;