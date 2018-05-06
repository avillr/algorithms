const { rotateArray } = require('./solution')

test('rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -1)', () => {
  let array = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40]
  rotateArray(array, -1)
  expect(array).toEqual([10, 20, 0, 59, 86, 32, 11, 9, 40, 1])
})

test('rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 2)', () => {
  let array = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40]
  rotateArray(array, 2)
  expect(array).toEqual([9, 40, 1, 10, 20, 0, 59, 86, 32, 11])
})
