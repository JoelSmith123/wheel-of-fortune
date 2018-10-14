const { expect } = require('Chai')
const Round = require('../lib/Round')
const puzzle = require('../lib/Puzzle')
const Data = require('../lib/data')



describe('Round', () => {
  // var round
  // beforeEach( () => {
  //   round = new Round()
  // })

  it('should fetch a random puzzle from our dataset', () => {
    var round = new Round()
    round.getNewPuzzle()
    expect(round.getNewPuzzle()).to.not.be.undefined;
  })

})