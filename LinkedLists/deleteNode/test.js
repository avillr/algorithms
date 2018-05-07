const { deleteNode } = require('./solution')

test('deleteNode(list, key)', () => {
  let list = {
    data: 20,
    next: {
      data: 14,
      next: {
        data: 36,
        next: {
          data: 11,
          next: {
            data: 72,
            next: {
              data: 41,
              next: null
            }
          }
        }
      }
    }
  }
  list = deleteNode(list, 72)
  expect(list).toEqual({
    data: 20,
    next: {
      data: 14,
      next: {
        data: 36,
        next: {
          data: 11,
          next: {
            data: 41,
            next: null
          }
        }
      }
    }
  })
})
