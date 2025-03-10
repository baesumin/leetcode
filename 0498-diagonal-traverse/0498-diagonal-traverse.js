/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let m = mat.length
  let n = mat[0].length
  let result = []

  if (m === 1 || n === 1) {
    return mat.flat()
  }

  for (let i = 0; i < m + n - 1; i++) {
    let x = i
    let y = 0
    let tmp = []
    for (let j = i; j >= 0; j--) {
      if (x - j < m && y + j < n) {
        tmp.push(mat[x - j][y + j])
      }
    }
    if (i % 2 === 0) {
      result.push(tmp.reverse())
    } else {
      result.push(tmp)
    }
  }

  return result.flat()
};

// 00
// 10 01
// 20 11 02
// 21 12
// 22

// 2  3   4
// 5  6   7
// 8  9  10
// 11 12 13
// 14 15 16

// 2 5
// 8 4
// 0 - 1



