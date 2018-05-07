const { nthFromLastNode } = require('./solution')

test('nthFromLastNode(list)', () => {
  let list = {
    data: 7,
    next: {
      data: 14,
      next: {
        data: 21,
        next: {
          data: 28,
          next: {
            data: 35,
            next: {
              data: 42,
              next: null
            }
          }
        }
      }
    }
  }
  expect(nthFromLastNode(list, 3).data).toEqual(28)
})
