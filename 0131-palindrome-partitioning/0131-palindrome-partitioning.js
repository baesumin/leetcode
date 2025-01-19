/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = []

  const dfs = (s, path) => {
    if (!s.length) {
      res.push(path)
      return
    }

    for (let i = 0; i < s.length; i++) {
      const word = s.substring(0, i + 1)
      if (isPalindrome(word)) {
        dfs(s.substring(i + 1), [...path, word])
      }
    }
  }

  dfs(s, [])
  return res
};

const isPalindrome = (s) => {
  let l = 0
  let r = s.length - 1

  while (l < r) {
    if (s[l++] !== s[r--]) return false
  }

  return true
}