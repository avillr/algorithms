const { permuteString } = require('./solution')

test('permuteString #1', () => {
  expect(permuteString('bad')).toEqual([
    'bad',
    'bda',
    'abd',
    'adb',
    'dba',
    'dab'
  ])
})
