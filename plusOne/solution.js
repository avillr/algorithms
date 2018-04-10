/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 0
  let length = digits.length

  // add one
  digits[length - 1] += 1

  for (let i = length - 1; i >= 0; i--) {
    if (carry === 1) {
      digits[i] += 1
    }
    if (digits[i] > 9) {
      carry = 1
      digits[i] = 0
    } else {
      carry = 0
    }
  }

  if (carry === 1) {
    digits[0] = 0
    digits.unshift(1)
  }

  return digits
}
