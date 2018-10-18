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
    $('.hidden-guess-section').addClass('spin-the-wheel')
  },

  appendLetter(column, currentGuess) {
    var thisDiv = document.querySelector(`.tile-${column}`);
    thisDiv.innerText = currentGuess
  },

  comparePlayerInputToAnswer() {
    game.checkLetters($('.guess-letter-input').val().toUpperCase())
    $('.guessed-letter-list').append(`Guessed Letter List: ${$('.guess-letter-input').val().toUpperCase()}`)
    $('.guess-letter-input').val('')
    $('.hidden-guess-section').removeClass('spin-the-wheel')
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

  toggleGuessAndNextPlayerButtons() {
    $('.guess-letter-input').addClass('display-mode-none')
    $('.next-player-btn').removeClass('display-mode-none')
    $('.guess-letter-btn').addClass('display-mode-none')
  },

  changePlayer() {
    $('.hidden-guess-section').removeClass('spin-the-wheel')
    $('.hidden-guess-section').addClass('display-mode-none')
    $('.purchase-vowel-pop-up').removeClass('spin-the-wheel')
    $('.purchase-vowel-pop-up').addClass('display-mode-none')
    $('.next-player-turn-pop-up').removeClass('display-mode-none')
    $('.next-player-turn-pop-up').addClass('spin-the-wheel')
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
    $('.next-player-turn-pop-up').addClass('display-mode-none')
    $('.next-player-turn-pop-up').removeClass('spin-the-wheel')
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

  removeClassGuessSection() {
    $('.hidden-guess-section').removeClass('spin-the-wheel')
    $('.hidden-guess-section').addClass('display-mode-none')
  },

  addClassPlayerThree(index) {
    $(`.player${index}-score-container`).addClass(`player${index}-background`)
  },
  
  toggleSubmitBtn() {
    $('.guess-letter-btn').addClass('display-mode-none')
    $('.next-player-btn').removeClass('display-mode-none')
  },

  displaySolvedThePuzzle() {
    $('.solved-the-puzzle').toggleClass('display-mode-none')
    $('.solved-the-puzzle').toggleClass('spin-the-wheel')
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

  purchaseVowelDisplayChange() {
    $('.purchase-vowel-pop-up').removeClass('display-mode-none')
    $('.purchase-vowel-pop-up').addClass('spin-the-wheel')
  },

  checkPurchasedVowel() {
    game.purchaseVowel($('.guessed-vowel').val().toUpperCase())
  },

  guessedVowelIsNotAVowelMessage() {
    $('.not-a-vowel-message').removeClass('display-mode-none')      
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
