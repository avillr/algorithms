const maxInSlidingWindow = (arr, windowSize) => {
  const window = []
  const result = []
  if (windowSize > arr.length) return

  // initialize window
  for (let i = 0; i < windowSize; i++) {
    while (window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
      window.pop()
    }
    window.push(i)
  }
  result.push(arr[window[0]])

  // begin sliding
  for (let i = windowSize; i < arr.length; i++) {
    while (window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
      window.pop()
    }
    if (window.length > 0 && window[0] <= i - windowSize) {
      window.shift()
    }
    window.push(i)
    result.push(arr[window[0]])
  }
  return result
}

module.exports = { maxInSlidingWindow }
