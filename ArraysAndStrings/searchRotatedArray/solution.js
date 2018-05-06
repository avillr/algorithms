const searchRotatedArray = (arr, key) => {
  let start = 0
  let end = arr.length - 1
  let mid = Math.floor((end + start) / 2)

  while (end >= start) {
    mid = Math.floor((end + start) / 2)
    if (arr[mid] === key) {
      return mid
    } else if (arr[start] < arr[mid] && key < arr[mid] && key >= arr[start]) {
      end = mid - 1
    } else if (arr[mid] < arr[end] && key > arr[mid] && key <= arr[end]) {
      start = mid + 1
    } else if (arr[start] > arr[mid]) {
      end = mid - 1
    } else if (arr[end] < arr[mid]) {
      start = mid + 1
    }
  }
  return -1
}

module.exports = { searchRotatedArray }
