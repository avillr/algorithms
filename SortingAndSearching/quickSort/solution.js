const quicksort = arr => {
  quicksortRec(arr, 0, arr.length - 1)
}

const quicksortRec = (arr, low, high) => {
  if (high > low) {
    let pivot = parition(arr, low, high)
    quicksortRec(arr, low, pivot - 1)
    quicksortRec(arr, pivot + 1, high)
  }
}

const parition = (arr, low, high) => {
  let pivotVal = arr[low]
  let i = low
  let j = high

  while (i < j) {
    while (i <= high && arr[i] <= pivotVal) {
      i++
    }
    while (arr[j] > pivotVal) {
      j--
    }
    if (i < j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }

  arr[low] = arr[j]
  arr[j] = pivotVal

  return j
}

module.exports = { quicksort }
