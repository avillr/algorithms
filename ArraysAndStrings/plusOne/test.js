const { plusOne } = require('./solution')

test('Adds one to [1, 9]', () => {
  expect(plusOne([1, 9])).toEqual([2, 0])
})

test('Adds one to [1, 2, 8, 9]', () => {
  expect(plusOne([1, 2, 8, 9])).toEqual([1, 2, 9, 0])
})

test('Adds one to [1, 2, 3, 4, 5, 6, 7, 8]', () => {
  expect(plusOne([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 9])
})

test('Adds one to [9,9,9,9,9,9,9,9]', () => {
  expect(plusOne([9, 9, 9, 9, 9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 0])
})
