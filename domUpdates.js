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
    $('.guessed-letter-list').append(' ' , $('.guess-letter-input').val().toUpperCase())
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
    $('.next-player-turn-pop-up').removeClass('display-mode-none')
    $('.next-player-turn-pop-up').addClass('spin-the-wheel')
    $('.purchase-vowel-pop-up').removeClass('spin-the-wheel')
    $('.purchase-vowel-pop-up').addClass('display-mode-none')
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

    $(`.player${index}-score-container`).addClass('background-change')
  },
  
  toggleSubmitBtn() {
    $('.guess-letter-btn').addClass('display-mode-none')
    $('.next-player-btn').removeClass('display-mode-none')
  },

  displayPlayersRoundScoresOnGame(playerIndex) {
    $(`.player${playerIndex + 1}-score`).text(game.players[playerIndex].roundScore)
  },

  displayWheelPrize(wheelPrize) {
    $('.wheel-prize-display').text(wheelPrize)
  },

  purchaseVowelDisplayChange() {
    $('.purchase-vowel-pop-up').removeClass('display-mode-none')
    $('.purchase-vowel-pop-up').addClass('spin-the-wheel')
  },

  checkPurchasedVowel() {
    console.log($('.guessed-vowel').val().toUpperCase())
    if ($('.guessed-vowel').val().toUpperCase().match(/[AEIOU]/)) {
        game.purchaseVowel($('.guessed-vowel').val().toUpperCase())
      } else {
        $('.not-a-vowel-message').removeClass('display-mode-none')      
    }
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
