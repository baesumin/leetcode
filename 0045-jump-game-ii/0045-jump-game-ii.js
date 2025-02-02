/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let dp = Array(nums.length).fill(0)

  for (let i = 0; i < nums.length; i++) {
    let v = nums[i]
    for (let j = 1; j <= v; j++) {
      if (dp[i + j] === 0) {
        dp[i + j] = dp[i] + 1
      }
    }
  }

  return dp[nums.length - 1]
};