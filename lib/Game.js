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
    this.round = round;


  }

  wheelSpin() {
    // generate random number between 1 and the wheel array.length
    // that random number is the key for the wheel array value we grab
    // append that value to the page
  }

}