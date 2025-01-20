/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  return longestSubstringUtil(s, 0, s.length, k)
};

const longestSubstringUtil = (s, start, end, k) => {
  if (end - start < k) return 0

  const countMap = Array(26).fill(0)
  for (let i = start; i < end; i++) {
    countMap[s.charCodeAt(i) - 97]++
  }

  for (let mid = start; mid < end; mid++) {
    if (countMap[s.charCodeAt(mid) - 97] >= k) continue

    let midNext = mid + 1
    // while (midNext < end && countMap[s[midNext] - 'a'] < k) midNext++

    return Math.max(longestSubstringUtil(s, start, mid, k), longestSubstringUtil(s, midNext, end, k))
  }

  return end - start
}