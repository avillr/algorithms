/*
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.windowSize = size
  this.windowSum = 0
  this.windowStartIndex = 0
  this.numbers = []
}

/*
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  // time: O(1) space: O(n)
  if (this.numbers.length >= this.windowSize) {
    this.windowSum -= this.numbers[this.windowStartIndex]
    this.windowStartIndex++
  }
  this.numbers.push(val)
  this.windowSum += this.numbers[this.numbers.length - 1]
  return this.windowSum / (this.numbers.length - this.windowStartIndex)
}

/*
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = Object.create(MovingAverage).createNew(size)
 * var param_1 = obj.next(val)
 */
