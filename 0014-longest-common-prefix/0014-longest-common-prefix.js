/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = ''
  let cur = strs[0][0]
  let index = 0
  let maxCompare = { len: Infinity, idx: -1 }

  for (let i = 0; i < strs.length; i++) {
    if (maxCompare.len > strs[i].length) {
      maxCompare.len = strs[i].length
      maxCompare.idx = i
    }
  }

  while (true) {
    if (index === maxCompare.len || strs.some(str => str[index] !== cur)) break
    result += strs[maxCompare.idx][index]
    cur = strs[maxCompare.idx][index + 1]
    index += 1
  }

  return result
};