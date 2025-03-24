/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
  if (p === 0) return 0
  nums.sort((a, b) => a - b)
  let n = nums.length
  let left = 0
  let right = nums[n - 1] - nums[0]

  const canFormPair = (maxDiff) => {
    let cnt = 0
    let index = 0

    while (index < n - 1) {
      if (nums[index + 1] - nums[index] <= maxDiff) {
        index += 2
        cnt++
      } else {
        index += 1
      }
      if (cnt >= p) return true;
    }

    return cnt >= p
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (canFormPair(mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
};