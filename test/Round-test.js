const { expect } = require('Chai')
const Round = require('../lib/Round')
const Puzzle = require('../lib/Puzzle')



describe('Round', () => {
  var round
  beforeEach( () => {
    round = new Round()
  })

  it('should fetch a random puzzle from our dataset', () => {
    round.getNewPuzzle()
    expect(puzzle.currentPuzzle).to.equal(!undefined)
  })

})