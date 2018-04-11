/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// time: O(nlogn)
const findKthLargest = (nums, k) => {
  nums.sort((a, b) => a - b)
  return nums[nums.length - k]
}
