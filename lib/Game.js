class Game {
  constructor(currentRound = 1) {
    this.players = [
      player1 = {
        name: player1name,
        currentPlayer: false,
        roundScore: 1000,
        totalScore: 10000
      },
      player2 = {
        name: player2name,
        currentPlayer: false,
        roundScore: 2000,
        totalScore: 20000
      },
      player3 = {
        name: player3name,
        currentPlayer: false,
        roundScore: 3000,
        totalScore: 30000
      }
    ];

    this.wheelValue = 750;
    this.currentRound = currentRound;

  }

  startNewRound() {
    // if puzzle.checkLetters === true,
    // currentRound++
    // call round.getNewPuzzle
  }

  pickWinnerForBonusRound() {
    // condition if currentRound equals 5
    // get the player with the highest totalScore and 
    // call new bonusRound, pass in player
    // call bonusRound.populateBonusLettersToScreen
  }  

}