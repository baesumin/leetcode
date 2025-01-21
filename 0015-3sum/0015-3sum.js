/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = []
  nums.sort((a, b) => a - b)

  for (let target = 0; target < nums.length; target++) {
    const currentTarget = nums[target]
    let left = target + 1
    let right = nums.length - 1

    while (left < right) {
      let sum = nums[target] + nums[left] + nums[right]
      if (sum === 0) {
        result.push([currentTarget, nums[left], nums[right]])
        while (nums[left + 1] === nums[left]) left++;
        while (nums[right - 1] === nums[right]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
    while (nums[target + 1] === nums[target]) target++;
  }

  return result
};  