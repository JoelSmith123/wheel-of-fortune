const { expect } = require('Chai')
const Wheel = require('../lib/Wheel')
const Data = require('../lib/data')
const spies = require('chai-spies')
global.domUpdates = require('../domUpdates.js');
chai.use(spies);

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

