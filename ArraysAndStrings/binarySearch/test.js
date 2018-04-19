const { binarySearch } = require('./solution')

test('[1, 2, 3, 4], 3', () => {
  expect(binarySearch([1, 2, 3, 4], 3)).toBe(2)
})
test('[1, 10, 50, 999, 10002], 1', () => {
  expect(binarySearch([1, 10, 50, 999, 10002], 1)).toBe(0)
})
test('[1], 1', () => {
  expect(binarySearch([1], 1)).toBe(0)
})
test('[12, 15, 92, 100, 5689230389], 98374', () => {
  expect(binarySearch([12, 15, 92, 100, 5689230389], 98374)).toBe(-1)
})
test('[], 9', () => {
  expect(binarySearch([], 9)).toBe(-1)
})
