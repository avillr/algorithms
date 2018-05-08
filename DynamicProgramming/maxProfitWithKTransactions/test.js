const { maxProfitWithKTransactions } = require('./solution')

test('maxProfitWithKTransactions #1', () => {
  expect(maxProfitWithKTransactions([], 1)).toEqual(0)
})

test('maxProfitWithKTransactions #2', () => {
  expect(maxProfitWithKTransactions([1], 1)).toEqual(0)
})

test('maxProfitWithKTransactions #3', () => {
  expect(maxProfitWithKTransactions([1, 10], 1)).toEqual(9)
})

test('maxProfitWithKTransactions #4', () => {
  expect(maxProfitWithKTransactions([1, 10], 3)).toEqual(9)
})

test('maxProfitWithKTransactions #5', () => {
  expect(maxProfitWithKTransactions([3, 2, 5, 7, 1, 3, 7], 1)).toEqual(6)
})

test('maxProfitWithKTransactions #6', () => {
  expect(maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], 2)).toEqual(93)
})

test('maxProfitWithKTransactions #7', () => {
  expect(maxProfitWithKTransactions([5, 11, 3, 50, 40, 90], 2)).toEqual(97)
})

test('maxProfitWithKTransactions #8', () => {
  expect(maxProfitWithKTransactions([5, 11, 3, 50, 40, 90], 3)).toEqual(103)
})
