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
    let randomWheelPrize = Math.floor(Math.random() * wheelPrizeArray.length);
    console.log(wheelPrizeArray[randomWheelPrize])
    if (typeof wheelPrizeArray[randomWheelPrize] === 'number') {
      this.wheelValue = wheelPrizeArray[randomWheelPrize]
      domUpdates.displayWheelPrize(wheelPrizeArray[randomWheelPrize])
    } else {
      if (wheelPrizeArray[randomWheelPrize] === 'LOSE A TURN') {
        domUpdates.displayBankruptMessage('You Lose a Turn')
      } else {
        domUpdates.displayBankruptMessage('You are Bankrupt')
        this.players[this.currentPlayerIndex].roundScore = 0
        domUpdates.displayPlayersRoundScoresOnGame(this.currentPlayerIndex)
      }
      this.updateCurrentPlayer()
    } 
  }

  checkForNewRound() {
    let matchingLetterArr = []
    let correctAnswerComparison = this.round.newPuzzle.currentPuzzle.correct_answer.split('')
    
    correctAnswerComparison = correctAnswerComparison.filter(letter => {
      return letter !== ' '
    })

    correctAnswerComparison.forEach(letter => {
      if (this.round.lettersGuessed.includes(letter)) {
        matchingLetterArr.push(letter)
      }
    })

    if (matchingLetterArr.length === correctAnswerComparison.length) {
      this.startNewRound()
    }
  }

  checkSolvePuzzleAnswer(guess) {
    let correctAnswer = this.round.newPuzzle.currentPuzzle.correct_answer
    let currentPlayer = this.players[this.currentPlayerIndex]
    let guessUpperCase = guess.toUpperCase()
    let correctUpperCase = correctAnswer.toUpperCase()

    if(guessUpperCase === correctUpperCase) {
      domUpdates.displaySolvedThePuzzle(this.players[this.currentPlayerIndex].name)
      currentPlayer.roundScore = currentPlayer.roundScore += 1000
      currentPlayer.totalScore = currentPlayer.totalScore += currentPlayer.roundScore
      domUpdates.displayPlayersGrandTotalScores(this.currentPlayerIndex)
      domUpdates.displayPlayersRoundScoresOnGame(this.currentPlayerIndex)
      this.startNewRound()
      this.resetPlayerRoundScores()
    } else {
      domUpdates.displayIncorrectSolve()
      this.updateCurrentPlayer()
    }
  }

  resetPlayerRoundScores() {
    this.players.forEach((player, index) => {
      player.roundScore = 0
      domUpdates.displayPlayersRoundScoresOnGame(index)
    })
  }

  startNewRound() {
    domUpdates.resetGreenTiles()
    this.currentRound++
    this.currentPlayerIndex = 0
    this.players[0].currentPlayer = true
    this.players[1].currentPlayer = false
    this.players[2].currentPlayer = false
    let newRoundPuzzle = this.round.getNewPuzzle()
    this.round.changeTileColor(newRoundPuzzle.currentPuzzle.correct_answer);
    domUpdates.updateRoundCategory(newRoundPuzzle.currentPuzzle.category)
    domUpdates.updatedPlayerIndication(1)
    if (this.currentRound === 5) {
      this.pickWinnerForBonusRound()
    }
  }

  checkLetters(letter) {
    let correctAnswer = this.round.newPuzzle.currentPuzzle.correct_answer
    let answerLettersArray = this.round.newPuzzle.currentPuzzle.correct_answer.split('')
    this.round.checkGuessedLetters(letter)

    if (answerLettersArray.includes(letter)) {
      this.findMatchingTiles(letter, correctAnswer)
      this.updateCurrentPlayerRoundScore(this.wheelValue, letter)
      return true
    } else {
      domUpdates.changePlayer()
      this.updateCurrentPlayer()
      return false
    }
  }

  forEachLetter(array, currentGuess, columnNum) {
    array.forEach((letter) => {
      if(letter === currentGuess)  {
        domUpdates.appendLetter(columnNum, currentGuess)
      }
      columnNum += 1
    })
  }

  findMatchingTiles(currentGuess, correctAnswer) {
    let lettersArray = correctAnswer.split('');
    let wordArray = correctAnswer.split(' ');
    if (correctAnswer.length < 15) {
      let column = 14
      this.forEachLetter(lettersArray, currentGuess, column)
    } else {
      let column = 0
      let columnOne = 0
      let columnTwo = 14
      let columnThree = 28
      wordArray.forEach((word) => {
        let wordLetters = word.split('')
        column += word.length
        if (column < 15) {
          this.forEachLetter(wordLetters, currentGuess, columnOne)
          column += 1
          columnOne += word.length + 1
        } else if (column > 14 && column < 28) {
          this.forEachLetter(wordLetters, currentGuess, columnTwo)
          column += 1
          columnTwo += word.length + 1
        } else {
          this.forEachLetter(wordLetters, currentGuess, columnThree)
          columnThree += word.length + 1
        }
      })
    }
  }

  updateCurrentPlayer() {
    let newIndex = this.players.reduce((acc, player, index) => {
      if(player.currentPlayer === true) {
        acc = index + 1
      }
      return acc
    }, 0)
    if (this.players[2].currentPlayer === true) {
      this.currentPlayerIndex = 0
      this.players[2].currentPlayer = false
      this.players[0].currentPlayer = true
      domUpdates.updatedPlayerIndication(1)
      domUpdates.addClassPlayerThree(3)
    } else if (this.players[0].currentPlayer === true) {
      this.currentPlayerIndex = 1
      this.players[0].currentPlayer = false
      this.players[1].currentPlayer = true
      domUpdates.updatedPlayerIndication(2) 
    } else {
      this.currentPlayerIndex = 2
      this.players[1].currentPlayer = false
      this.players[2].currentPlayer = true
      domUpdates.updatedPlayerIndication(3)    
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

  purchaseVowel(vowel) {
    if (vowel.match(/[AEIOU]/)) {
      if (this.round.newPuzzle.currentPuzzle.correct_answer.split('').includes(vowel)) {
        let vowelCost = this.round.newPuzzle.currentPuzzle.correct_answer.split(vowel).length - 1
        this.players[this.currentPlayerIndex].roundScore -= 100 * vowelCost
        this.findMatchingTiles(vowel, this.round.newPuzzle.currentPuzzle.correct_answer)
        domUpdates.displayPlayersRoundScoresOnGame(this.currentPlayerIndex)
        this.round.checkGuessedLetters(vowel)
        domUpdates.changePlayer()
      } else {
        this.updateCurrentPlayer()
        domUpdates.changePlayer()
        domUpdates.toggleNextPlayerClass()
      }
    } else {
      domUpdates.guessedVowelIsNotAVowelMessage() 
    }
  }

  pickWinnerForBonusRound() {
    let sortedScores = this.players.sort((a, b) => {
      console.log(a.totalScore)
      return a.totalScore - b.totalScore
    })
    domUpdates.displayGameWinner(sortedScores[2].name)
  }  

}

if (typeof module !== 'undefined') {
  module.exports = Game;
}
