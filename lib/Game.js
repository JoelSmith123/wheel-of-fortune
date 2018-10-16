class Game {
  constructor(currentRound = 0) {
    this.players = [
      {
        name: 'player1name',
        currentPlayer: true,
        roundScore: 0,
        totalScore: 0
      },
      {
        name: 'player2name',
        currentPlayer: false,
        roundScore: 0,
        totalScore: 0
      },
      {
        name: 'player3name',
        currentPlayer: false,
        roundScore: 0,
        totalScore: 0
      }
    ];

    this.currentPlayerIndex = 0;
    this.wheelValue = 0;
    this.currentRound = currentRound;
    this.round = new Round()
  }

  wheelSpin() {
    let wheelPrizeArray = data.wheel;
    var randomWheelPrize = Math.floor(Math.random() * wheelPrizeArray.length);
    domUpdates.displayWheelPrize(wheelPrizeArray[randomWheelPrize])
    console.log(wheelPrizeArray[randomWheelPrize])
    if (typeof wheelPrizeArray[randomWheelPrize] === 'number') {
      this.wheelValue = wheelPrizeArray[randomWheelPrize]
    } else if (typeof wheelPrizeArray[randomWheelPrize] === 'string') {
      this.updateCurrentPlayer()
      domUpdates.changePlayer()
    } 
  }

  startNewRound() {
    this.currentRound++
    let newRoundPuzzle = this.round.getNewPuzzle()
    this.round.changeTileColor(newRoundPuzzle.currentPuzzle.correct_answer);
    domUpdates.updateRoundCategory(newRoundPuzzle.currentPuzzle.category)
    domUpdates.updatedPlayerIndication(1)
  }

  checkLetters(letter) {
    let correctAnswer = this.round.newPuzzle.currentPuzzle.correct_answer
    let answerLettersArray = this.round.newPuzzle.currentPuzzle.correct_answer.split('')
    this.round.checkGuessedLetters(letter)
    if (answerLettersArray.includes(letter)) {
      domUpdates.appendGuessToDom(letter, correctAnswer)
      this.updateCurrentPlayerRoundScore(this.wheelValue, letter)
      return true
    } else {
      domUpdates.changePlayer()
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
    if(this.players[2].currentPlayer === true) {
      this.players[2].currentPlayer = false
      this.players[0].currentPlayer = true
      domUpdates.updatedPlayerIndication(1, 3)
      this.currentPlayerIndex = 0
    } else {
      this.currentPlayerIndex = newIndex;
      this.players[newIndex - 1].currentPlayer = false
      this.players[newIndex].currentPlayer = true
      domUpdates.updatedPlayerIndication(newIndex + 1, newIndex)
    }
  }

  updateCurrentPlayerRoundScore(score, letter) {
    let arrOfAnswerLetters = this.round.newPuzzle.currentPuzzle.correct_answer.split('')
    let numOfMatchingLetters = 0
    arrOfAnswerLetters.forEach(answerLetter => {
      if (answerLetter === letter) {
        numOfMatchingLetters++
      }
    })
    this.players[this.currentPlayerIndex].roundScore += (score * numOfMatchingLetters)
    domUpdates.displayPlayersRoundScoresOnGame(this.currentPlayerIndex)
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
