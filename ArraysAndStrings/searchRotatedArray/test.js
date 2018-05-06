const { searchRotatedArray } = require('./solution')

test('searchRotatedArray([176, 188,199,200,210,222,1,10,20,47,59,63,75,88,99,107,120,133,155,162], 200)', () => {
  expect(
    searchRotatedArray(
      [
        176,
        188,
        199,
        200,
        210,
        222,
        1,
        10,
        20,
        47,
        59,
        63,
        75,
        88,
        99,
        107,
        120,
        133,
        155,
        162
      ],
      200
    )
  ).toEqual(3)
})
