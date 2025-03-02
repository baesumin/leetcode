/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let squareArr = []
  for (let i = 1; i * i <= n; i++) {
    squareArr.push(i * i)
  }

  let dp = Array(n + 1).fill(n + 1)
  dp[0] = 0
  for (let i = 0; i < squareArr.length; i++) {
    let curSquare = squareArr[i]
    for (let j = curSquare; j < dp.length; j++) {
      dp[j] = Math.min(dp[j], dp[j - curSquare] + 1)
    }
  }
  return dp[n]
};