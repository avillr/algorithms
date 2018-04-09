/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  // time: O(n^2) space: O(n)
  let matchingSubstring = [true] //because null string is always present

  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (matchingSubstring[j] && wordDict.includes(s.substring(j, i))) {
        matchingSubstring[i] = true
        break
      }
    }
  }
  return matchingSubstring[s.length] ? true : false
}

// Naive solution
// time: O(n^n) space: O(n)
// const wordBreak = (s, wordDict) => {
//   if (s === '') return true
//   let options = []
//   for (let i = 0; i < wordDict.length; i++) {
//     if (s.startsWith(wordDict[i])) {
//       options.push(i)
//     }
//   }
//   for (let i = 0; i < options.length; i++) {
//     if (wordBreak(s.slice(wordDict[options[i]].length), wordDict)) {
//       return true
//     }
//   }
//   return false
// }
