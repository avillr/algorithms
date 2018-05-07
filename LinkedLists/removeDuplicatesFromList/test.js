const { removeDuplicates } = require('./solution')

test('removeDuplicates(list)', () => {
  let list = {
    data: 7,
    next: {
      data: 14,
      next: {
        data: 28,
        next: {
          data: 28,
          next: {
            data: 14,
            next: {
              data: 21,
              next: null
            }
          }
        }
      }
    }
  }
  list = removeDuplicates(list)
  expect(list).toEqual({
    data: 7,
    next: {
      data: 14,
      next: {
        data: 28,
        next: {
          data: 21,
          next: null
        }
      }
    }
  })
})
