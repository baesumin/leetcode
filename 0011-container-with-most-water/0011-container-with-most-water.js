/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let result = 0

  while (left < right) {
    result = Math.max(result, (right - left) * Math.min(height[left], height[right]))
    if (height[left] >= height[right]) {
      right--
    } else {
      left++
    }
  }

  return result
};