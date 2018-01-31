// Two Number Sum

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in sorted order. If no two numbers sum up to the target sum, the function should return an empty array.

// Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
// Sample output: [-1, 11]

// function twoNumberSum(array, targetSum) {
//   // Write your code here.
//   let output = [];
//   for (let i = 1; i < array.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (array[i] + array[j] === targetSum) {
//         output = [array[i], array[j]];
//       }
//     }
//   }
//   return output.sort((a, b) => a > b);
// }

function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a > b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === targetSum) {
      return [array[left], array[right]];
    } else if (sum < targetSum) {
      left += 1;
    } else if (sum > targetSum) {
      right -= 1;
    }
  }
  return [];
}

console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));
