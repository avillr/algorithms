const { isPalindrome } = require('./solution')

test('racecar', () => {
  expect(isPalindrome('racecar')).toBe(true)
})
test('notracecar', () => {
  expect(isPalindrome('notracecar')).toBe(false)
})
test('a', () => {
  expect(isPalindrome('a')).toBe(true)
})
test('bbb', () => {
  expect(isPalindrome('bbb')).toBe(true)
})
test('', () => {
  expect(isPalindrome('')).toBe(true)
})
test('asdfghjklkjhgfdsa', () => {
  expect(isPalindrome('asdfghjklkjhgfdsa')).toBe(true)
})
