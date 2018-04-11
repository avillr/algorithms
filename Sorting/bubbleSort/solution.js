function bubbleSort(array) {
  let sorted = false
  while (!sorted) {
    sorted = true
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] < array[i]) {
        let nextVal = array[i + 1]
        array[i + 1] = array[i]
        array[i] = nextVal
        sorted = false
      }
    }
  }
  return array
}
