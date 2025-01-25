/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let str = String(n)
  let set = new Set()
  set.add(n)

  while (str !== '1') {
    let tempNum = 0
    for (let char of str) {
      tempNum += Math.pow(+char, 2)
    }
    if (!set.has(tempNum)) {
      set.add(tempNum)
      str = String(tempNum)
    } else {
      return false
    }
  }

  return true
};