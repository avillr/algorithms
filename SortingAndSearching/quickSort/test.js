const { quicksort } = require('./solution')

test('quicksort([55, 23, 26, 2, 5])', () => {
  let array = [55, 23, 26, 2, 5]
  quicksort(array)
  expect(array).toEqual([2, 5, 23, 26, 55])
})

test('quicksort([1, 10, 20, 0, 59, 63, 0, 88, 0])', () => {
  let array = [1, 10, 20, 0, 59, 63, 0, 88, 0]
  quicksort(array)
  expect(array).toEqual([0, 0, 0, 1, 10, 20, 59, 63, 88])
})
