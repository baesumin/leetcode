/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num === 0) return '0'
  let digit = '0123456789abcdef'
  let word = ''

  if (num < 0) {
    num = num >>> 0;
  }

  while (num > 0) {
    word = digit[num % 16] + word
    num = Math.floor(num / 16)
  }

  return word
};