class Game {
  constructor(currentRound = 0) {
    this.players = [
      {
        name: 'player1name',
        currentPlayer: true,
        roundScore: 1000,
        totalScore: 10000
      },
      {
        name: 'player2name',
        currentPlayer: false,
        roundScore: 2000,
        totalScore: 20000
      },
      {
        name: 'player3name',
        currentPlayer: false,
        roundScore: 3000,
        totalScore: 30000
      }
    ];

    this.wheelValue = 750;
    this.currentRound = currentRound;
    this.round = new Round()
  }

  startNewRound() {
    this.currentRound++
    let newRoundPuzzle = this.round.getNewPuzzle()
    // change puzzle tiles
    domUpdates.updateRoundCategory(newRoundPuzzle.currentPuzzle.category)
    domUpdates.updatedPlayerIndication(1)
  }

  checkLetters(letter) {
    let correctAnswer = this.round.newPuzzle.currentPuzzle.correct_answer
    let answerLettersArray = this.round.newPuzzle.currentPuzzle.correct_answer.split('')
    this.round.checkGuessedLetters(letter)
    if (answerLettersArray.includes(letter)) {
      domUpdates.appendGuessToDom(letter, correctAnswer)
      return true
    } else {
      domUpdates.guessedWrongLetter()
      this.updateCurrentPlayer()
      return false
    }
  }

  updateCurrentPlayer() {
    let newIndex = this.players.reduce((acc, player, index) => {
      if(player.currentPlayer === true) {
        acc = index + 1
      }
      return acc
    }, 0)
    this.players[newIndex - 1].currentPlayer = false
    this.players[newIndex].currentPlayer = true
    domUpdates.updatedPlayerIndication(newIndex + 1)
  }

  pickWinnerForBonusRound() {
    // condition if currentRound equals 5
    // get the player with the highest totalScore and 
    // call new bonusRound, pass in player
    // call bonusRound.populateBonusLettersToScreen
  }  

}

if (typeof module !== 'undefined') {
  module.exports = Game;
}
