const { numberOfBinaryTreeTopologies } = require('./solution')

test('numberOfBinaryTreeTopologies #1', () => {
  expect(numberOfBinaryTreeTopologies(3)).toEqual(5)
})

test('numberOfBinaryTreeTopologies #2', () => {
  expect(numberOfBinaryTreeTopologies(5)).toEqual(42)
})

test('numberOfBinaryTreeTopologies #3', () => {
  expect(numberOfBinaryTreeTopologies(7)).toEqual(429)
})

test('numberOfBinaryTreeTopologies #4', () => {
  expect(numberOfBinaryTreeTopologies(10)).toEqual(16796)
})

test('numberOfBinaryTreeTopologies #5', () => {
  expect(numberOfBinaryTreeTopologies(13)).toEqual(742900)
})
