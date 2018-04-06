// time: O(n) space: O(1)
function reverseWords(arr) {
  // Reverse sentence
  reverser(arr, 0, arr.length - 1)
  // Reverse each word in place
  start = null
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      if (start !== null) {
        reverser(arr, start, i - 1)
        start = null
      }
    } else if (i === arr.length - 1) {
      if (start !== null) {
        reverser(arr, start, i)
      }
    } else {
      if (start === null) {
        start = i
      }
    }
  }
  return arr
}

function reverser(arr, start, end) {
  while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
  }
}

// time:O(n) space:O(n)
function reverseWords(arr) {
  let outputSentence = []
  let currentWord = []
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === ' ') {
      outputSentence = outputSentence.concat(currentWord)
      outputSentence.push(arr[i])
      currentWord = []
    } else {
      currentWord.unshift(arr[i])
    }
  }
  outputSentence = outputSentence.concat(currentWord)
  return outputSentence
}
