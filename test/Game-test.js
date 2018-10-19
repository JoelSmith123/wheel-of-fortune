const { expect } = require('Chai')
const chai = require('chai');
const Game = require('../lib/Game')
const Round = require('../lib/Round')
const Data = require('../lib/data')
const spies = require('chai-spies')
global.domUpdates = require('../lib/Data.js');

chai.use(spies);

chai.spy.on(global.domUpdates, ['displayWheelPrize', 'displayBankruptMessage', 'displayPlayersRoundScoresOnGame', 'displaySolvedThePuzzle', 'displayPlayersGrandTotalScores', 'displayIncorrectSolve', 'updateRoundCategory', 'updatedPlayerIndicatio', 'changePlayer', 'appendLetter', 'guessedVowelIsNotAVowelMessage', 'displayGameWinner'], () => true);

describe('Game', () => {
  var game
  beforeEach( () => {
    game = new Game();
  })

  it('should get a new random wheel prize', () => {
    game.wheelSpin()
    expect(game.wheelValue).to.not.equal(0)
  })

  it('should go to the next player if the wheel prize is a string', () => {
    game.round.newPuzzle.currentPuzzle.correct_answer = 'LOSE A TURN'
    game.wheelSpin()
    expect(game.currentPlayerIndex).to.equal(1)
  })

  it('should start a new round if all the letters have been guessed', () => {
    game.round.newPuzzle.currentPuzzle.correct_answer = 'denver'
    game.round.lettersGuessed = ['d', 'e', 'n', 'v', 'e', 'r']
    game.checkForNewRound()
    expect(game.currentRound).to.equal(2)
  })

  it('should add $1000 to the current player\'s score if they solve the puzzle', () => {
    game.round.newPuzzle.currentPuzzle.correct_answer = 'denver'
    game.checkSolvePuzzleAnswer('denver')
    expect(game.players[currentPlayerIndex].roundScore).to.equal(1000)
  })

  it('should go to the next player if the current player failed to solve the puzzle', () => {
    game.round.newPuzzle.currentPuzzle.correct_answer = 'denver'
    game.checkSolvePuzzleAnswer('littleton')
    expect(game.currentPlayerIndex).to.equal(1)
  })

  it('should reset each player\'s round score to 0 when a new round is called', () => {
    game.players[1].roundScore = 1500
    game.resetPlayerRoundScores()
    expect(game.players[1].roundScore).to.equal(0)
  })

  it('should reset the puzzle board tiles when a new round is called', () => {
    game.startNewRound()
    expect(domUpdates.resetGreenTiles).to.have.been.called(1)
  })

  it('should update the round category when a new round is called', () => {
    game.startNewRound()
    expect(game.currentRound).to.equal(2)
  })

  it('should check for guessed letters', () => {
    game.round.newPuzzle.currentPuzzle.correct_answer = 'denver'
    game.checkLetters('e')
    expect(game.findMatchingTiles).to.have.been.called(1)
  })

  it('should find the matching puzzle tile for the guessed letter', () => {
    game.checkLetters(letter)
  })

  it('should increase the player\'s score if a correct letter is guessed', () => {
    game.round.newPuzzle.currentPuzzle.correct_answer = 'denver'
    game.wheelValue = 500;
    game.checkLetters('e')
    expect(game.players[currentPlayerIndex].roundScore).to.equal(1000)
  })

  it('should go to a new player if the current player guesses an incorrect letter', () => {
    game.round.newPuzzle.currentPuzzle.correct_answer = 'denver'
    game.checkLetters('z')
    expect(game.currentPlayerIndex).to.equal(1)
  })

  it('should append blank tiles to the DOM for the answer', () => {
    game.findMatchingTiles(currentGuess, correctAnswer)
    game.forEachLetter(array, currentGuess, columnNum)
  })

  it('should update the current player in a loop through the players', () => {
    game.updateCurrentPlayer()
    expect(game.currentPlayerIndex).to.equal(1)
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
