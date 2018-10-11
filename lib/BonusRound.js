class BonusRound extends Round {
  constructor(player) {
    super();
    this.bonusWheelPrizes = [
      20000,
      30000,
      60000,
      10000,
      50000
    ];
    this.player = player;
  }

  populateBonusLettersToScreen() {
    // populate screen with r, s, t, l, and e where they go in correctAnswer 
    // populates user guessed 3 consonants and a vowel to screen
  }

  spinBonusWheel() {
    // calling a new Wheel, passing in bonusWheel array
    // generate random number between 1 and the bonusWheel array.length
    // that random number is the key for the wheel array value we grab
    // append that value to the page
  }

  addBonusRoundPrize() {
    // adds the bonusRound prize to the currentPlayer's total score
  }


}