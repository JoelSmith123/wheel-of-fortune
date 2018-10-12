let welcomePage = document.querySelector('.welcome-page')
let mainGameDisplay = document.querySelector('.main-game-display')
let submitPlayersButton = document.querySelector('.submit-players-button')


function changeGameDisplay(e) {
  e.preventDefault()
  welcomePage.classList.add('display-mode-none')
  mainGameDisplay.classList.remove('display-mode-none')
}

submitPlayersButton.addEventListener('click', changeGameDisplay)