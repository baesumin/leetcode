/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  let set = new Set(nums)
  let len = nums[0].length
  let result = ''

  const makeStr = (s) => {
    if (s.length === len && !set.has(s)) {
      throw s;
    }
    if (s.length < len) {
      makeStr(s + '0');
      makeStr(s + '1');
    }
  }

  try {
    makeStr('');
  } catch (result) {
    return result;
  }
};