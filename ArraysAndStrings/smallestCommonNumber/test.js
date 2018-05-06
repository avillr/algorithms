const { smallestCommonNumber } = require('./solution')

test('smallestCommonNumber([6, 7, 10, 25, 30, 63, 64], [-1, 4, 5, 6, 7, 8, 50], [1, 6, 10, 14])', () => {
  expect(
    smallestCommonNumber(
      [6, 7, 10, 25, 30, 63, 64],
      [-1, 4, 5, 6, 7, 8, 50],
      [1, 6, 10, 14]
    )
  ).toEqual(6)
})
