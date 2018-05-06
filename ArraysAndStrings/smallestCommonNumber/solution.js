const smallestCommonNumber = (arr1, arr2, arr3) => {
  let pointer1 = 0
  let pointer2 = 0
  let pointer3 = 0

  while (
    pointer1 < arr1.length &&
    pointer2 < arr2.length &&
    pointer3 < arr3.length
  ) {
    // found smallest matching number
    if (
      arr1[pointer1] === arr2[pointer2] &&
      arr2[pointer2] === arr3[pointer3]
    ) {
      return arr1[pointer1]
    }

    // advance pointer for smallest number
    if (arr1[pointer1] <= arr2[pointer2] && arr1[pointer1] <= arr3[pointer3]) {
      pointer1 += 1
    } else if (
      arr2[pointer2] <= arr1[pointer1] &&
      arr2[pointer2] <= arr3[pointer3]
    ) {
      pointer2 += 1
    } else if (
      arr3[pointer3] <= arr1[pointer1] &&
      arr3[pointer3] <= arr2[pointer2]
    ) {
      pointer3 += 1
    }
  }

  return -1
}

module.exports = { smallestCommonNumber }
