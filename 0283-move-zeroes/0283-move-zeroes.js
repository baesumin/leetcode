/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  return nums.sort((a, b) => {
    if (a === 0) return 1
    else if (b === 0) return -1
  })
};