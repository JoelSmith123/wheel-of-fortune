const welcomePage = $('.welcome-page')
const mainGameDisplay = $('.main-game-display')
const submitPlayersButton = $('.submit-players-button')

submitPlayersButton.on('click', changeGameDisplay)
// $('.guess-letter').on('click', puzzle.checkLetters())
$('.spin-wheel').on('click', displaySpinWheel)

function displaySpinWheel(event) {
  $('.hidden-guess-section').addClass('spin-the-wheel')
}

