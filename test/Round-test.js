const { expect } = require('Chai')
const Round = require('../lib/Round')
const puzzle = require('../lib/Puzzle')
const Data = require('../lib/Data.js')
global.domUpdates = require('../lib/Data.js');

describe('Round', () => {
  var round
  beforeEach( () => {
    round = new Round()
  })

  it('should fetch a random puzzle from our dataset', () => {
    round.getNewPuzzle()
    expect(round.getNewPuzzle()).to.not.equal(undefined);
  })

  it('should push letters guessed that are not duplicates into an array', () => {
    round.checkGuessedLetters('a')
    round.checkGuessedLetters('a')
    expect(round.lettersGuessed).to.deep.equal(['a'])
  })
})