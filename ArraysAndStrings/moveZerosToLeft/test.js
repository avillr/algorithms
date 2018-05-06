const { moveZerosToLeft } = require('./solution')

test('moveZerosToLeft([1, 10, 20, 0, 59, 63, 0, 88, 0])', () => {
  let array = [1, 10, 20, 0, 59, 63, 0, 88, 0]
  moveZerosToLeft(array)
  expect(array).toEqual([0, 0, 0, 1, 10, 20, 59, 63, 88])
})
