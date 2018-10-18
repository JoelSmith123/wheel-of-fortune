const { expect } = require('Chai')
const Round = require('../lib/Round')
const puzzle = require('../lib/Puzzle')
const Data = require('../lib/Data.js')
const spies = require('chai-spies')
global.domUpdates = require('../domUpdates.js');
chai.use(spies);

chai.spy.on(global.domUpdates, ['changeTile','findCorrectTile'], () => true);

describe('Round', () => {
  var round
  beforeEach( () => {
    round = new Round()
  })

  it('should fetch a random puzzle from our dataset', () => {
    round.getNewPuzzle()
    expect(round.getNewPuzzle()).to.not.be.undefined;
  }),

  it('should increment the column by one for every letter', () => {
    let column = 1
    let
    findCo
  })

  it('should push the guessed letter into an array and should not push duplicate letters', () => {
    round.checkGuessedLetters('a')
    round.checkGuessedLetters('a')
    expect(round.lettersGuessed).to.equal(['a']);
  })
})