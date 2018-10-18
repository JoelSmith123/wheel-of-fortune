const { expect } = require('Chai')
const Round = require('../lib/Round')
const puzzle = require('../lib/Puzzle')
const Data = require('../lib/data')


describe('Round', () => {
  var round
  beforeEach( () => {
    round = new Round()
  })

  it.skip('should fetch a random puzzle from our dataset', () => {
    round.getNewPuzzle()
    expect(round.getNewPuzzle()).to.not.be.undefined;
  })

  it.skip('should change green tiles to white tiles for each defined letter', () => {
    round.findCorrectTile(array, columnNum)
  })

  it.skip('should change board tile colors based on the length of the puzzle', () => {
    round.changeTileColor(correctAnswer)
  })

  it.skip('should add guessed letters to the lettersGuessed array for tracking', () => {
    round.checkGuessedLetters(letter)
  })

})