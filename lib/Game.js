class Game = {
  constructor(round = 1) {
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
    this.currentRound = new Round();


  }

  startNewRound() {
    // if all the correct letters are guessed in Puzzle,
    // call a new Round object
  }

  pickWinnerForBonusRound() {
    // condition if currentRound equals 5
    // get the player with the highest totalScore and 
    // start new BonusRound
  }  

}