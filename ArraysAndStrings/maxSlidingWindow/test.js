const { maxInSlidingWindow } = require('./solution')

test('maxInSlidingWindow([-4, 2, -5, 1, -1, 6], 3)', () => {
  expect(maxInSlidingWindow([-4, 2, -5, 1, -1, 6], 3)).toEqual([2, 2, 1, 6])
})
