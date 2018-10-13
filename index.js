let welcomePage = $('.welcome-page')
let mainGameDisplay = $('.main-game-display')
let submitPlayersButton = $('.submit-players-button')


submitPlayersButton.on('click', changeGameDisplay)


function changeGameDisplay(e) {
  e.preventDefault()
  welcomePage.addClass('display-mode-none')
  mainGameDisplay.removeClass('display-mode-none')
}

// submitPlayersButton on click
//    if a name hasnt been entered yet 
//        start new game, keep on welcome screen
//        assign input to property of player
//    else
//        assign input to next property of player that isnt undefined
//    if all players arent undefined
//        maybe change the input accept button to a start game button
//        hide the welcome page, display the game page
