/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  let isPrime = Array(right + 1).fill(true)
  isPrime[0] = isPrime[1] = false

  for (let i = 2; i <= Math.floor(Math.sqrt(right)); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= right; j += i) {
        isPrime[j] = false
      }
    }
  }

  let arr = []
  for (let i = left; i <= right; i++) {
    if (isPrime[i]) arr.push(i)
  }

  if (arr.length <= 1) return [-1, -1]

  let min = Infinity
  let x = 0
  let y = 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] < min) {
      min = arr[i + 1] - arr[i]
      x = arr[i]
      y = arr[i + 1]
    }
  }

  return [x, y]
};