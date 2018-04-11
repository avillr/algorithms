/*
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.list = null
  this.length = 0
}

/*
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if (this.list === null) {
    this.list = { val: num, next: null }
  } else {
    let currNode = this.list
    while (num >= currNode.val && currNode.next) {
      currNode = currNode.next
    }
    let newNode = { val: num, next: currNode.next }
    currNode.next = newNode
  }
  this.length++
  // console.log('list', this.list)
}

/*
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let counter = 0
  let medianNode = this.list
  while (counter < this.length / 2 - 1) {
    counter++
    medianNode = medianNode.next
  }
  if (this.length % 2 === 0) {
    return (medianNode.val + medianNode.next.val) / 2
  } else {
    return medianNode.val
  }
}

/*
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

let test = new MedianFinder()
test.addNum(-1)
console.log(test.findMedian()) // [-1] => -1
test.addNum(-2)
console.log(test.findMedian()) // [-1, -2] => -1.5
test.addNum(-3)
console.log(test.findMedian()) // [-1, -2, -3] => -2
test.addNum(-4)
console.log(test.findMedian()) // [-1, -2, -3, -4] => -2.5
test.addNum(-5)
console.log(test.findMedian()) // [-1, -2, -3, -4, -5] => -3
