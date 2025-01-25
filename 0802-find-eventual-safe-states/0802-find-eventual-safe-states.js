/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  let n = graph.length
  let visited = Array(n).fill(0)
  let result = []


  const dfs = (node) => {
    if (visited[node] > 0) {
      return visited[node] === 2
    }

    visited[node] = 1

    for (let next of graph[node]) {
      if (!dfs(next)) return false
    }

    visited[node] = 2

    return true
  }

  for (let i = 0; i < n; i++) {
    if (dfs(i)) result.push(i)
  }

  return result
};