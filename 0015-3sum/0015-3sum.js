/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)

  let result = []
  for (let target = 0; target < nums.length; target++) {
    let left = target + 1
    let right = nums.length - 1

    while (left < right) {

      let sum = nums[target] + nums[left] + nums[right]

      if (sum === 0) {
        result.push([nums[target], nums[left], nums[right]])
        while (nums[left] === nums[left + 1]) left++
        while (nums[right] === nums[right + 1]) right--
        left++
        right--
      }
      else if (sum > 0) {
        right--
      } else {
        left++
      }
    }

    while (target < nums.length - 1 && nums[target] === nums[target + 1]) target++
  }
  return result
};