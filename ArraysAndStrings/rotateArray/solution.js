const rotateArray = (arr, k) => {
  // normalize k
  k = k % arr.length
  if (k < 0) {
    k = k + arr.length
  }

  reverseArray(arr, 0, arr.length - 1)
  reverseArray(arr, 0, k - 1)
  reverseArray(arr, k, arr.length - 1)
}

const reverseArray = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
  }
}

module.exports = { rotateArray }
