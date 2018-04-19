/*
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  if (s === null || s.length < t.length) return ''

  // find number of each character necessary
  let charsNecessary = {}
  for (let character of t) {
    if (charsNecessary[character]) {
      charsNecessary[character] += 1
    } else {
      charsNecessary[character] = 1
    }
  }

  let start = 0
  let numberOfCharsNecessary = t.length
  for (let end = 0; end < s.length; end++) {
    if (charsNecessary[s[end]]) {
      numberOfCharsNecessary -= 1
    }
  }
  console.log(counter)
}

console.log(minWindow('abcd', 'abc'))
