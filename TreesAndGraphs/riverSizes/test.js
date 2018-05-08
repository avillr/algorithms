const { riverSizes } = require('./solution')

test('riverSizes(args)', () => {
  expect(
    riverSizes([
      [1, 0, 0, 1, 0],
      [1, 0, 1, 0, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0]
    ]).sort((a, b) => a - b)
  ).toEqual([1, 2, 2, 2, 5])
})
