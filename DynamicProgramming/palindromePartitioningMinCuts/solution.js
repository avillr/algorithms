const palindromePartitioningMinCuts = str => {
  if (str.length === 1) return 0

  // is the substring from i to j a palindrome?
  const palindromicity = []
  for (let i = 0; i < str.length; i++) {
    palindromicity.push([])
    for (let j = i; j < str.length; j++) {
      let left = i
      let right = j
      let isPalindrome = true
      while (left <= right) {
        if (str[left] !== str[right]) {
          isPalindrome = false
          break
        }
        left++
        right--
      }
      palindromicity[i][j] = isPalindrome
    }
  }

  // array of min cuts for substring 0 to i
  let cuts = new Array(str.length).fill(Infinity)
  for (let i = 0; i < str.length; i++) {
    if (palindromicity[0][i]) {
      cuts[i] = 0
    } else {
      cuts[i] = cuts[i - 1] + 1
      for (let j = 1; j < i; j++) {
        if (palindromicity[j][i] && cuts[j - 1] + 1 < cuts[i]) {
          cuts[i] = cuts[j - 1] + 1
        }
      }
    }
  }
  return cuts[cuts.length - 1]
}

module.exports = { palindromePartitioningMinCuts }
