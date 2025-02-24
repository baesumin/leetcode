/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let n = candidates.length
  let result = []

  const find = (pos, arr, sum) => {
    if (sum > target) return
    if (sum === target) {
      result.push([...arr])
      return
    }

    for (let i = pos; i < n; i++) {
      find(i, [...arr, candidates[i]], sum + candidates[i])
    }
  }

  find(0, [], 0)

  return result
};