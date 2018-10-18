const player1NameDisplay = $('.welcome-page-player1-name')
const player2NameDisplay = $('.welcome-page-player2-name')
const player3NameDisplay = $('.welcome-page-player3-name')
const submitPlayersButtonIcon = $('.fa-check-circle')
const startGameButtonText = $('.start-game-button-text')
const mainGameDisplayGrid = $('.main-game-display-grid')
const playersNamesArr = []
let game
let wheel

const domUpdates = {

  submitPlayersName(e) {
    e.preventDefault()

    if (playersNamesArr.length === 0) {
      game = new Game()
      acceptNewPlayerName(player1NameDisplay, 0)
    } else if (playersNamesArr.length === 1) { 
      acceptNewPlayerName(player2NameDisplay, 1)
    } else if (playersNamesArr.length === 2) {
      acceptNewPlayerName(player3NameDisplay, 2)
      changeButtonSubmitToStart()
    } else if (playersNamesArr.length === 3) {
      game.startNewRound()
      changeGameDisplay()
    }
  },

  updateRoundCategory(category) {
    $('.puzzle-category').text(category)
  },

  changeTile(column) {
    var thisDiv = document.querySelector(`.tile-${column}`);
    thisDiv.classList.remove('green-tile')
    thisDiv.classList.add("white-tile")
  },

  spinWheel() {
    game.wheelSpin()
  },

  appendLetter(column, currentGuess) {
    var thisDiv = document.querySelector(`.tile-${column}`);
    thisDiv.innerText = currentGuess
  },

  comparePlayerInputToAnswer() {
    game.checkLetters($('.guess-letter-input').val().toUpperCase())
    $('.guessed-letter-list-container').removeClass('display-mode-none')
    $('.guessed-letter-list').append(' ' + $('.guess-letter-input').val().toUpperCase())
    $('.guess-letter-input').val('')
    game.checkForNewRound()
  },

  resetGreenTiles() {
    let allBoardTilesArr = $('.puzzle-grid-square')
    $('.guessed-letter-list').text(' ')
    allBoardTilesArr.map(tile => {
      $(allBoardTilesArr[tile]).text(' ')
      $(allBoardTilesArr[tile]).removeClass('white-tile')
      $(allBoardTilesArr[tile]).addClass('green-tile')
    })
  },

  changePlayer() {
    $('.purchase-vowel-pop-up').removeClass('spin-the-wheel')
    $('.purchase-vowel-pop-up').addClass('display-mode-none')
  },

  toggleNextPlayerClass() {
    $('.next-player-turn-pop-up').toggleClass('display-mode-none')
    $('.next-player-turn-pop-up').toggleClass('spin-the-wheel')
  },

  displaySolveThePuzzle() {
    $('.solve-the-puzzle-section').removeClass('display-mode-none')
    $('.solve-the-puzzle-section').addClass('spin-the-wheel')
  },

  solveThePuzzle() {
    $('.solve-the-puzzle-section').removeClass('spin-the-wheel')
    $('.solve-the-puzzle-section').addClass('display-mode-none')
    let solvePuzzleGuess = $('.solve-puzzle-input').val()
    game.checkSolvePuzzleAnswer(solvePuzzleGuess)
  },

  showPlayerOptions() {
    $('.next-player-turn-pop-up').removeClass('spin-the-wheel')
    $('.next-player-turn-pop-up').addClass('display-mode-none')
    $('.hidden-guess-section').removeClass('spin-the-wheel')
    $('.hidden-guess-section').addClass('display-mode-none')
    console.log($('.hidden-guess-section'))
  },

  updatedPlayerIndication(index) {
    let playerScoreContainers = $(`.player-score-container`)
    playerScoreContainers.map(container => {
      $(playerScoreContainers[container]).removeClass('background-change')
    })
    $(`.player${index}-name-game-display`).addClass('pulsate')
    $(`.player${index}-score-container`).addClass('pulsate')
    $(`.player${index}-score-container`).removeClass(`player${index}-background`)
    $(`.player${index}-score-container`).addClass('background-change')
    $(`.player${index - 1}-score-container`).addClass(`player${index - 1}-background`)
  },

  displayGuessSection() {
    $('.hidden-guess-section').removeClass('display-mode-none')
    $('.hidden-guess-section').addClass('spin-the-wheel')
  },

  removeGuessSection() {
    $('.hidden-guess-section').removeClass('spin-the-wheel')
    $('.hidden-guess-section').addClass('display-mode-none')
  },

  addClassPlayerThree(index) {
    $(`.player${index}-score-container`).addClass(`player${index}-background`)
  },

  displaySolvedThePuzzle() {
    $('.solved-the-puzzle').toggleClass('display-mode-none')
    $('.solved-the-puzzle').toggleClass('spin-the-wheel')
    $('.solve-puzzle-input').val('')
  },

  displayIncorrectSolve() {
    $('.incorrect-solve-section').toggleClass('display-mode-none')
    $('.incorrect-solve-section').toggleClass('spin-the-wheel')
  },

  displayPlayersRoundScoresOnGame(playerIndex) {
    $(`.player${playerIndex + 1}-score`).text('Round Score:' + ' ' + '$' + game.players[playerIndex].roundScore)
  },

  displayPlayersGrandTotalScores(playerIndex) {
    $(`.player${playerIndex + 1}-grand-score`).text('Total Score:' + ' ' + '$' + game.players[playerIndex].totalScore)
  },

  displayWheelPrize(wheelPrize) {
    $('.wheel-prize-display').text(`$${wheelPrize}`)
  },

  displayBankruptMessage(string) {
    $('.bankrupt-lose-a-turn').toggleClass('display-mode-none')
    $('.bankrupt-lose-a-turn').toggleClass('spin-the-wheel')
    $('.bankrupt-lose-a-turn-text').text(string)
  },

  purchaseVowelDisplayChange() {
    $('.purchase-vowel-pop-up').removeClass('display-mode-none')
    $('.purchase-vowel-pop-up').addClass('spin-the-wheel')
  },

  checkPurchasedVowel() {
    game.purchaseVowel($('.guessed-vowel').val().toUpperCase())
    $('.guessed-vowel').val('')
    $('.spin-the-wheel').addClass('display-mode-none')
  },

  guessedVowelIsNotAVowelMessage() {
    $('.not-a-vowel-message').removeClass('display-mode-none')      
  },

  displayGameWinner(player) {
    $('.game-winner-display').addClass('spin-the-wheel')
    $('.game-winner-name').text('Congratulations ' + player + ' you won the game!')
  },

  checkIfGuessedLetterIsVowel() {
    $('.is-a-vowel-message').removeClass('display-mode-none')
  }

}


function acceptNewPlayerName(player, playerIndex) {
  player.text($('.player-name-input').val())
  playersNamesArr.push($('.player-name-input').val())
  game.players[playerIndex].name = $('.player-name-input').val()
  displayPlayersNamesOnGame(playerIndex)
  $('.player-name-input').val('')
}

function changeButtonSubmitToStart() {
  submitPlayersButtonIcon.remove()
  $('.submit-players-button').addClass('start-game-button')
  startGameButtonText.removeClass('display-mode-none')
}

function changeGameDisplay() {
  welcomePage.addClass('display-mode-none')
  mainGameDisplay.addClass('main-game-display-grid')
  mainGameDisplay.removeClass('display-mode-none')
}

function displayPlayersNamesOnGame(playerIndex) {
   $(`.player${playerIndex + 1}-name-game-display`).text($('.player-name-input').val())
}


if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}
