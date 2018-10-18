const { expect } = require('Chai')
const Game = require('../lib/Game')
const Round = require('../lib/Round')
const Data = require('../lib/data')

describe.only('Game', () => {
  var game
  beforeEach( () => {
    game = new Game();
  })

  it.skip('should get a new random wheel prize', () => {
    game.wheelSpin()
  })

  it.skip('should go to the next player if the wheel prize is a string', () => {
    game.wheelSpin()
  })

  it.skip('should start a new round if all the letters have been guessed', () => {
    game.checkForNewRound()
  })

  it.skip('should add $1000 to the current player\'s score if they solve the puzzle', () => {
    game.checkSolvePuzzleAnswer(guess)
  })

  it.skip('should go to the next player if the current player failed to solve the puzzle', () => {
    game.checkSolvePuzzleAnswer(guess)
  })

  it.skip('should reset each player\'s round score to 0 when a new round is called', () => {
    game.resetPlayerRoundScores()
  })

  it.skip('should reset the puzzle board tiles when a new round is called', () => {
    game.startNewRound()
  })

  it.skip('should update the round category when a new round is called', () => {
    game.startNewRound()
  })

  it.skip('should check for guessed letters', () => {
    game.checkLetters(letter)
  })

  it.skip('should find the matching puzzle tile for the guessed letter', () => {
    game.checkLetters(letter)
  })

  it.skip('should increase the player\'s score if a correct letter is guessed', () => {
    game.checkLetters(letter)
  })

  it.skip('should go to a new player if the current player guesses an incorrect letter', () => {
    game.checkLetters(letter)
  })

  it.skip('should append blank tiles to the DOM for the answer', () => {
    game.findMatchingTiles(currentGuess, correctAnswer)
    game.forEachLetter(array, currentGuess, columnNum)
  })

  it.skip('should update the current player in a loop through the players', () => {
    game.updateCurrentPlayer()
  })

  it.skip('should calculate the round score for the current player', () => {
    game.updateCurrentPlayerRoundScore(score, letter)
  })

  it.skip('should use the current player round score to purchase vowels', () => {
    game.purchaseVowel(vowel)
  })

  it.skip('should go to the next player if the current player selects the wrong vowel', () => {
    game.purchaseVowel(vowel)
  })

})
