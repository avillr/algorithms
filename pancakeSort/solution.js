// time: O(n^2) space: O(1)
function pancakeSort(arr) {
  let workingLength = arr.length
  while (workingLength > 1) {
    let max = arr[0]
    let maxIndex = 0
    for (let i = 1; i < workingLength; i++) {
      if (arr[i] > max) {
        max = arr[i]
        maxIndex = i
      }
    }
    flip(arr, maxIndex + 1)
    flip(arr, workingLength)
    workingLength--
  }
  return arr
}

function flip(arr, k) {
  let left = 0
  let right = k - 1
  while (left < right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
  }
}

// pancakeSort([1, 5, 4, 3, 2])
