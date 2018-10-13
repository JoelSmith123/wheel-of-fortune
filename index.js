$('.spin-wheel').on('click', displaySpinWheel)
$('.guess-letter').on('click', puzzle.checkLetters())

function displaySpinWheel(event) {
  $('.hidden-guess-section').addClass('spin-the-wheel')
}
