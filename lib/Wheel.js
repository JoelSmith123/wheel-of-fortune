class Wheel {
  constructor() {
    this.currentValue = 0;
  }

  wheelSpin() {
    let wheelPrizeArray = data.wheel;
    // generate random number between 1 and the wheel array.length
    var randomWheelPrize = Math.floor(Math.random() * wheelPrizeArray.length);
    // that random number is the key for the wheel array value we grab
    // assign wheel.currentValue to the key value
    this.currentValue = wheelPrizeArray[randomWheelPrize]
  }
}

if (typeof module !== 'undefined') {
  module.exports = Wheel;
}