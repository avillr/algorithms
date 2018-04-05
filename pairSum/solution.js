function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a > b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === targetSum) {
      return [array[left], array[right]];
    } else if (sum < targetSum) {
      left++;
    } else if (sum > targetSum) {
      right--;
    }
  }
  return [];
}

console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));
