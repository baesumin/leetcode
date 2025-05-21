/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0]
  let sum = nums[0]
  let cnt = 1

  for (let i = 1; i < nums.length; i++) {
    if (sum + nums[i] < nums[i]) {
      cnt = 1
      sum = nums[i]
      maxSum = Math.max(nums[i], maxSum)
      continue
    }
    sum += nums[i]
    maxSum = Math.max(sum, maxSum)
    cnt++
  }

  return maxSum
};