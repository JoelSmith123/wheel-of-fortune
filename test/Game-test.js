const { expect } = require('Chai')
const Game = require('../lib/Game')
const Round = require('../lib/Round')
const Data = require('../lib/Data.js')
const spies = require('chai-spies')
chai.use(spies);

describe('Game', () => {
  var game
  beforeEach( () => {
    game = new Game();
  })

  it('should increment the round by one', () => {
    game.startNewRound()
    expect(game.currentRound).to.equal(2)
  })

  it('should find player with highest total score', () => {

  })



})
