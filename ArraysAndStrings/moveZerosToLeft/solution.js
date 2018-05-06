const moveZerosToLeft = arr => {
  let read = arr.length - 1
  let write = arr.length - 1

  // shift all non zeros to right end of array
  while (read >= 0) {
    if (arr[read] !== 0) {
      arr[write] = arr[read]
      write -= 1
    }
    read -= 1
  }

  // fill rest of array with 0s
  while (write >= 0) {
    arr[write] = 0
    write -= 1
  }
}

module.exports = { moveZerosToLeft }
