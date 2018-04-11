var repeatedStringMatch = function(A, B) {
  let count = 1
  let maxLength = Math.max(A.length, B.length)
  while (A.length < maxLength) {
    count++
    A = A + A
  }
  if (A.includes(B)) return count
  if ((A + A).includes(B)) return count + 1
  return -1
}

console.log('A')
console.log('results', repeatedStringMatch('abcd', 'cdabcdab'))
console.log('B')
console.log('results', repeatedStringMatch('bb', 'bbbbbbb'))
