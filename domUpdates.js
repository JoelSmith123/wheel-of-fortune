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
  },

  appendGuessToDom(currentGuess, answerLettersArray) {
    if (answerLettersArray.length < 15) {
      let column = 0
      let stringedArray = answerLettersArray.split('')
      stringedArray.forEach((letter) => {
        if(letter === currentGuess) {
          var thisDiv = document.querySelector(`.tile-${column}`);
          thisDiv.innerText = currentGuess;
        }
        column += 1
      })
    } else {
     let column = 0
     let columnOne = 0
     let wordArray = answerLettersArray.split(' ');
     wordArray.forEach((word) => {
       column += word.length
       if (column < 15) {
         let newArray = word.split('')
         newArray.forEach((letter) => {
          if(letter === currentGuess) {
            var thisDiv = document.querySelector(`.tile-${columnOne}`);
            thisDiv.innerText = currentGuess;
          }
          columnOne += 1
        })
        columnOne += 1

       } else {
         column = 14
         let newArray = word.split('')
         newArray.forEach((letter) => {
           if(letter === currentGuess) {
            var thisDiv = document.querySelector(`.tile-${column}`);
            thisDiv.innerText = currentGuess;
          }
          column += 1
        })
       }
     })
   }

  },

  comparePlayerInputToAnswer() {
    game.checkLetters($('.guess-letter-input').val())
    $('.guessed-letter-list').append(' ' ,$('.guess-letter-input').val())
  },

  guessedWrongLetter() {
    $('.guessed-wrong-letter-message').removeClass('display-mode-none')
    $('.guess-letter-input').addClass('display-mode-none')
    $('.guess-letter-btn-text').addClass('display-mode-none')
    $('.next-player-btn-text').removeClass('display-mode-none')
  },

  updatedPlayerIndication(index) {
    $(`.player${index - 1}-score-container`).removeClass('background-change')
    $(`.player${index}-score-container`).addClass('background-change')
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
  $('.submit-players-button').addClass('start-game-button')
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