const { findGrantsCap } = require('./solution')

test('[2, 100, 50, 120, 1000], 190', () => {
  expect(findGrantsCap([2, 100, 50, 120, 1000], 190)).toEqual(47)
})

test('[8, 30, 35, 42, 50], 120', () => {
  expect(findGrantsCap([8, 30, 35, 42, 50], 120)).toEqual(28)
})
