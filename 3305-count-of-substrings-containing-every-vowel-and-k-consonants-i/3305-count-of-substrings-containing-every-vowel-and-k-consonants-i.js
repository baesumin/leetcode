/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  let result = 0
  let check = {
    'a': 0,
    'e': 1,
    'i': 2,
    'o': 3,
    'u': 4
  }
  for (let i = 0; i < word.length; i++) {
    let arr = Array(6).fill(0)
    for (let j = i; j < word.length; j++) {
      arr[check[word[j]] ?? 5]++
      if (arr[5] === k && arr.slice(0, 5).every(Boolean)) {
        result++
      }
    }
    arr[check[word[i]] ?? 5]--
  }
  return result
};