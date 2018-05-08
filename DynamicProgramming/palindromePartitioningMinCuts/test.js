const { palindromePartitioningMinCuts } = require('./solution')

test('palindromePartitioningMinCuts #1', () => {
  expect(palindromePartitioningMinCuts('a')).toEqual(0)
})

test('palindromePartitioningMinCuts #2', () => {
  expect(palindromePartitioningMinCuts('abbb')).toEqual(1)
})

test('palindromePartitioningMinCuts #3', () => {
  expect(palindromePartitioningMinCuts('ababbbabbababa')).toEqual(3)
})

test('palindromePartitioningMinCuts #4', () => {
  expect(palindromePartitioningMinCuts('abbacecffgbgffab')).toEqual(4)
})

test('palindromePartitioningMinCuts #5', () => {
  expect(
    palindromePartitioningMinCuts('abcdefghijklmnoracecarpqrstuvwxyz')
  ).toEqual(26)
})
