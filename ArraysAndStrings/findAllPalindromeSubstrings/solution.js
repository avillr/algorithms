const findAllPalindromeSubstrings = str => {
  let palindromes = []
  for (let i = 0; i < str.length; i++) {
    findOddPalindromes(str, i, palindromes)
    findEvenPalindromes(str, i, palindromes)
  }
  return palindromes
}

const findOddPalindromes = (str, i, palindromes) => {
  let palindrome = str[i]
  let left = i - 1
  let right = i + 1
  while (str[left] === str[right] && left > -1 && right < str.length) {
    palindrome = str[left] + palindrome + str[right]
    palindromes.push(palindrome)
    left--
    right++
  }
}

const findEvenPalindromes = (str, i, palindromes) => {
  let palindrome = ''
  let left = i
  let right = i + 1
  while (str[left] === str[right] && left > -1 && right < str.length) {
    palindrome = str[left] + palindrome + str[right]
    palindromes.push(palindrome)
    left--
    right++
  }
}

module.exports = { findAllPalindromeSubstrings }
