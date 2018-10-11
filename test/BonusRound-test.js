const { expect } = require('Chai')
const BonusRound = require('../lib/BonusRound')
const Puzzle = require('../lib/Puzzle')
const Game = require('../lib/Game')



describe('BonusRound', () => {
  var bonusRound
  beforeEach( () => {
    bonusRound = new BonusRound()
  })

  it('adds bonus letters to the letters that have been guessed', () => {
    var puzzle = new Puzzle()
    bonusRound.populateBonusLettersToScreen()
    expect(puzzle.lettersGuessed).to.equal(['r', 's', 't', 'l', 'e'])
  })  

  it('adds user chosen consonants and a vowel to the letters that have been guessed', () => {
    var puzzle = new Puzzle()
    bonusRound.checkBonusLetters(['g', 'h', 'd', 'o'])
    expect(puzzle.lettersGuessed).to.equal(['g', 'h', 'd', 'o'])  
  })

  it('adds bonus round prize to winner\'s score', () => {
    var game = new Game()
    bonusRound.player = player1
    bonusRound.addBonusRoundPrize(10000)
    expect(game.players.player1.totalScore).to.equal(20000)
  })
})