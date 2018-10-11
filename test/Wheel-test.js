const { expect } = require('Chai')
const Wheel = require('../lib/Wheel')
const Data = require('../lib/data')

describe('Wheel', () => {
  var wheel
  beforeEach(() => {
    wheel = new Wheel()
  })

  it('generates a new random prize', () => {
    var sampleTestingPrizeValue = wheel.wheelSpin(10)
    expect(wheel.currentValue).to.equal(sampleTestingPrizeValue)
  }) 
})