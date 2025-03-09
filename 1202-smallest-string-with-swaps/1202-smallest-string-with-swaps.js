/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const n = s.length;
  const parent = Array.from({ length: n }, (_, i) => i);

  const find = x => parent[x] === x ? x : parent[x] = find(parent[x]);
  const union = (x, y) => parent[find(y)] = find(x);

  pairs.forEach(([a, b]) => union(a, b));

  const components = new Map();
  for (let i = 0; i < n; i++) {
    const root = find(i);
    if (!components.has(root)) components.set(root, []);
    components.get(root).push(i);
  }

  const result = Array(n);
  for (const [root, indices] of components) {
    const chars = indices.map(i => s[i]).sort();
    indices.sort((a, b) => a - b).forEach((idx, i) => result[idx] = chars[i]);
  }
  
  return result.join('');
};
