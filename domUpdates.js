const playerNameInput = $('.player-name-input')
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

  spinWheel(event) {
    wheel = new Wheel()
    wheel.wheelSpin()
    $('.hidden-guess-section').addClass('spin-the-wheel')
    $('.wheel-prize-display').text(wheel.currentValue)
  }

}

function acceptNewPlayerName(player, playerIndex) {
  player.text(playerNameInput.val())
  playersNamesArr.push(playerNameInput.val())
  game.players[playerIndex].name = playerNameInput.val()
  displayPlayersNamesOnGame(playerIndex)
  displayPlayersScoresOnGame(playerIndex)
  playerNameInput.val('')
}

function changeButtonSubmitToStart() {
  submitPlayersButtonIcon.remove()
  submitPlayersButton.addClass('start-game-button')
  startGameButtonText.removeClass('display-mode-none')
}

function changeGameDisplay() {
  welcomePage.addClass('display-mode-none')
  mainGameDisplay.addClass('main-game-display-grid')
  mainGameDisplay.removeClass('display-mode-none')
}



function displayPlayersNamesOnGame(playerIndex) {
   $(`.player${playerIndex + 1}-name-game-display`).text(playerNameInput.val())
}

function displayPlayersScoresOnGame(playerIndex) {
  $(`.player${playerIndex + 1}-score`).text(game.players[playerIndex].totalScore)
}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}