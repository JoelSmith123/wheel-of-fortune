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
  }

  checkLetters(letter) {
    console.log(letter);
    // split correct answer into an array of letters, all lowercase
    console.log(this.round.newPuzzle.currentPuzzle.correct_answer)
    let correctAnswer = this.round.newPuzzle.currentPuzzle.correct_answer
    let answerLettersArray = this.round.newPuzzle.currentPuzzle.correct_answer.split('')
    console.log(answerLettersArray)
    // compares user inputed letter to currentPuzzle correct letters
    // if the user guessed letter is in the currentPuzzle correct letters
    if (answerLettersArray.includes(letter)) {
      console.log(letter)
      domUpdates.appendGuessToDom(letter, correctAnswer)
      return true
    } else {
      // run error message
      return false
    }
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
