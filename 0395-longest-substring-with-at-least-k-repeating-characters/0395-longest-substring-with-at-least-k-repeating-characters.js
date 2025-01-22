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

  let map = new Map()
  for (let i = start; i < end; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  for (let mid = start; mid < end; mid++) {
    if (map.get(s[mid]) >= k) continue

    let midNext = mid + 1
    while (midNext < end && map.get(midNext) < k) midNext++

    return Math.max(longestSubstringUtil(s, start, mid, k), longestSubstringUtil(s, midNext, end, k))
  }

  return end - start
}