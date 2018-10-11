const { expect } = require('Chai')
const Puzzle = require('../lib/Puzzle')

describe('Puzzle', () => {
  var puzzle
  beforeEach( () => {
    puzzle = new Puzzle();
  })

  it('should compare solve attempt input to correct answer', () => {
    puzzle.currentPuzzle = {  
          category: 'The 90s',
          number_of_words: 1,
          total_number_of_letters: 7,
          first_word: 7, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Beepers',
        };

    expect(puzzle.checkAllLetters('Beepers')).to.equal(puzzle.currentPuzzle.correct_answer)
  })

  it('should check if user guess letter is contained in the correct answer', () => {
    puzzle.currentPuzzle = {  
          category: 'The 90s',
          number_of_words: 1,
          total_number_of_letters: 7,
          first_word: 7, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Beepers',
        };
    expect(puzzle.checkLetters('e')).to.equal(true)
  })


})