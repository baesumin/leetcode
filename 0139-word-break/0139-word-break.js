/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let set = new Set(wordDict)
  let seen = new Set()
  let q = [[0]]

  while (q.length) {
    let [pos] = q.shift()
    if (pos === s.length) return true

    let word = ''
    for (let i = pos; i <= s.length; i++) {
      if (set.has(word) && !seen.has(i)) {
        seen.add(i)
        q.push([i])
      }
      word += s[i]
    }
  }

  return false
};