class Round {
  constructor(newPuzzle) {
    this.lettersGuessed = [];
    this.newPuzzle = newPuzzle;
  }


  getNewPuzzle() {
    var randomNumber = Math.floor(Math.random() * Object.keys(data.puzzles).length);
    var puzzleAnswersName = Object.keys(data.puzzles)[randomNumber];
    var randomObjectAnswer = Math.floor(Math.random() * data.puzzles[puzzleAnswersName].puzzle_bank.length)
    var randomPuzzle = data.puzzles[puzzleAnswersName].puzzle_bank[randomObjectAnswer]
    this.newPuzzle = new Puzzle(randomPuzzle);
    console.log(this.newPuzzle.currentPuzzle.correct_answer);
    return this.newPuzzle;
  }

  // adds guessed letter(s) to lettersGuessed array on submit event
  checkGuessedLetters(letter) {
    if (!this.lettersGuessed.includes(letter)) {
      return this.lettersGuessed.push(letter)
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Round;
}