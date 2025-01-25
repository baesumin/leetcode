var eventualSafeNodes = function(graph) {
    const n = graph.length;
    // 0: 미방문, 1: 방문중, 2: 안전한 노드
    const visited = new Array(n).fill(0);
    const result = [];
    
    const dfs = (node) => {
        // 이미 방문한 노드라면
        if (visited[node] > 0) {
            // 안전한 노드인 경우에만 true 반환
            return visited[node] === 2;
        }
        
        // 현재 노드를 방문 중으로 표시
        visited[node] = 1;
        
        // 인접 노드들을 확인
        for (const next of graph[node]) {
            // 인접 노드가 안전하지 않다면 현재 노드도 안전하지 않음
            if (!dfs(next)) {
                return false;
            }
        }
        
        // 모든 인접 노드가 안전하다면 현재 노드도 안전
        visited[node] = 2;
        return true;
    };
    
    // 모든 노드에 대해 DFS 수행
    for (let i = 0; i < n; i++) {
        if (dfs(i)) {
            result.push(i);
        }
    }
    
    return result;
};
