function longestIncreasingSubsequence (array) {
  console.log('input', array)
  const subsequences = new Array(array.length)
  const indices = new Array(array.length + 1)
  let length = 0
  for (let i = 0; i < array.length; i++) {
    const currNum = array[i]
    console.log('---------currnum', currNum)
    const newLength = binarySearch(1, length, indices, array, currNum)
    console.log('newlength', newLength)
    subsequences[i] = indices[newLength - 1]
    indices[newLength] = i
    length = Math.max(length, newLength)

    console.log('array', array)
    console.log('subsequences', subsequences)
    console.log('indices', indices)
    console.log('length', length)
  }
  console.log('---------Final')
  console.log('array', array)
  console.log('subsequences', subsequences)
  console.log('indices', indices)
  console.log('length', length)
  return buildSequence(array, subsequences, indices[length])
}

function binarySearch (startIdx, endIdx, indices, array, currNum) {
  if (startIdx > endIdx) return startIdx
  const middle = Math.floor((startIdx + endIdx) / 2)
  console.log('--Middle:', middle)
  if (array[indices[middle]] < currNum) {
    startIdx = middle + 1
  } else {
    endIdx = middle - 1
  }
  return binarySearch(startIdx, endIdx, indices, array, currNum)
}

function buildSequence (array, subsequences, currIdx) {
  const longestIncSubsequence = []
  while (currIdx !== undefined) {
    longestIncSubsequence.unshift(array[currIdx])
    currIdx = subsequences[currIdx]
  }
  return longestIncSubsequence
}

console.log(longestIncreasingSubsequence([1, 2, 3, 4, 5]))
// console.log(longestIncreasingSubsequence([6, 7, -24, 12, 15, -12, 12, 5, 4, 35, 9]))
