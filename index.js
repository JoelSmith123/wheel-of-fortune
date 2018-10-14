const welcomePage = $('.welcome-page')
const mainGameDisplay = $('.main-game-display')
const submitPlayersButton = $('.submit-players-button')

playerNameInput.attr('autocomplete', 'off')
submitPlayersButton.remove('start-game-button-text')

submitPlayersButton.on('click', domUpdates.submitPlayersName)
// $('.guess-letter').on('click', puzzle.checkLetters())
$('.spin-wheel').on('click', displaySpinWheel)

function displaySpinWheel(event) {
  $('.hidden-guess-section').addClass('spin-the-wheel')
}

