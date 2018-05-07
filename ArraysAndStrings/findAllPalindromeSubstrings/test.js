const { findAllPalindromeSubstrings } = require('./solution')

test('findAllPalindromeSubstrings(aabbbaa)', () => {
  expect(findAllPalindromeSubstrings('aabbbaa')).toEqual([
    'aa',
    'bb',
    'bbb',
    'abbba',
    'aabbbaa',
    'bb',
    'aa'
  ])
})
