function findArrayQuadruplet(arr, s) {
  arr.sort((a, b) => a > b)
  for (let first = 0; first < arr.length - 3; first++) {
    for (let second = first + 1; second < arr.length - 2; second++) {
      let third = second + 1
      let fourth = arr.length - 1
      while (third < fourth) {
        let sum = arr[first] + arr[second] + arr[third] + arr[fourth]
        if (sum === s) {
          return [arr[first], arr[second], arr[third], arr[fourth]]
        } else if (sum < s) {
          third++
        } else {
          fourth--
        }
      }
    }
  }
  return []
}
