function binarySearch (array, target) {
  let mid
  let min = 0
  let max = array.length - 1

  while (min <= max) {
    mid = Math.floor((min + max) / 2)
    if (array[mid] === target) {
      return mid
    } else if (array[mid] < target) {
      min = mid + 1
    } else {
      max = mid - 1
    }
  }

  return -1
}

module.exports = { binarySearch }
