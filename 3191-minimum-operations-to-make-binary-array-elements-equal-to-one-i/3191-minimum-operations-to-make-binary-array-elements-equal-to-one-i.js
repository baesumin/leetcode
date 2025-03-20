/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let n = nums.length
  let cnt = 0

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      if (i + 2 >= n) {
        return -1;
      }
      nums[i] ^= 1
      nums[i + 1] ^= 1
      nums[i + 2] ^= 1
      cnt++
    }
  }

  return cnt
};

