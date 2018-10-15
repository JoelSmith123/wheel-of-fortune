const welcomePage = $('.welcome-page')
const mainGameDisplay = $('.main-game-display')

playerNameInput.attr('autocomplete', 'off')
$('.submit-players-button').remove('start-game-button-text')

$('.submit-players-button').on('click', domUpdates.submitPlayersName)
$('.spin-wheel').on('click', domUpdates.spinWheel)

$('.guess-letter-btn').on('click', domUpdates.comparePlayerInputToAnswer)

