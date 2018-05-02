const { tripleStep } = require('./solution')

test('tripleStep(0)', () => {
  expect(tripleStep(0)).toEqual(1)
})

test('tripleStep(3)', () => {
  expect(tripleStep(3)).toEqual(4)
})

test('tripleStep(5)', () => {
  expect(tripleStep(5)).toEqual(13)
})

test('tripleStep(23)', () => {
  expect(tripleStep(23)).toEqual(755476)
})
