const data = require('../lib/data')
const Puzzle = require('../lib/Puzzle')

class Round {
  constructor() {
    this.name = 'Kaylee';
  }


  getNewPuzzle() {
    var randomNumber = Math.floor(Math.random() * Object.keys(data.puzzles).length);
    var puzzleAnswersName = Object.keys(data.puzzles)[randomNumber];
    var randomObjectAnswer = Math.floor(Math.random() * data.puzzles[puzzleAnswersName].puzzle_bank.length)
    var randomPuzzle = data.puzzles[puzzleAnswersName].puzzle_bank[randomObjectAnswer]
    var newPuzzle = new Puzzle(randomPuzzle);
    return newPuzzle;
  }
}

module.exports = Round;