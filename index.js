const welcomePage = $('.welcome-page')
const mainGameDisplay = $('.main-game-display')

playerNameInput.attr('autocomplete', 'off')
$('.submit-players-button').remove('start-game-button-text')

$('.submit-players-button').on('click', domUpdates.submitPlayersName)
$('.spin-wheel').on('click', domUpdates.spinWheel)

$('.guess-letter-btn').on('click', domUpdates.comparePlayerInputToAnswer)
$('.next-player-btn').on('click', domUpdates.changePlayer)
$('.next-player-btn').on('click', domUpdates.showPlayerOptions)
$('.solve-puzzle-option-btn').on('click', domUpdates.displaySolveThePuzzle)
$('.submit-solve-puzzle-guess').on('click', domUpdates.removeClassSolveThePuzzle)

