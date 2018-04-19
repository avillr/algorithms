const { findArrayQuadruplet } = require('./solution')

test('[1, 2, 3, 4], 10', () => {
  expect(findArrayQuadruplet([1, 2, 3, 4], 10)).toEqual([1, 2, 3, 4])
})
test('[2, 7, 4, 0, 9, 5, 1, 3], 20', () => {
  expect(findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 20)).toEqual([
    0,
    4,
    7,
    9
  ])
})
