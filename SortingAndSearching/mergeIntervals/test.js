const { merge } = require('./solution')

test('[[1,3],[2,6],[8,10],[15,18]]', () => {
  expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([
    [1, 6],
    [8, 10],
    [15, 18]
  ])
})

test('[[1,4],[0,2],[3,5]]', () => {
  expect(merge([[1, 4], [0, 2], [3, 5]])).toEqual([[0, 5]])
})
