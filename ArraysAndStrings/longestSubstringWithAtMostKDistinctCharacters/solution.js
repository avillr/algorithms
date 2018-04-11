/*
 * @param {string} string
 * @param {number} k
 * @return {number}
 */
const lengthOfLongestSubstringKDistinct = function(string, k) {
  if (string === null || string.length === 0 || k === 0) return 0

  let characters = {}
  let start = 0
  let maxLength = 0
  let distinctCharacters = 0

  for (let end = 0; end < string.length; end++) {
    let currentCharacter = string[end]
    if (!characters[currentCharacter]) {
      distinctCharacters++
      characters[currentCharacter] = 0
    }
    characters[currentCharacter] += 1
    if (distinctCharacters <= k) {
      maxLength = Math.max(end - start + 1, maxLength)
    } else {
      while (distinctCharacters > k) {
        currentCharacter = string[start]
        characters[currentCharacter] -= 1
        if (characters[currentCharacter] === 0) {
          distinctCharacters--
        }
        start += 1
      }
    }
  }
  return maxLength
}

console.log(lengthOfLongestSubstringKDistinct('eceba', 2))
