function solution(x, y, n) {
    if(x===y) return 0
    let visited = new Set([x])
    let q = [[x,0]]
    let head = 0;
    
    while(head < q.length){
        const [cur, steps] = q[head++];
        let cands = [cur+n,cur*2,cur*3]
        
        for(cand of cands){
            if(cand===y)return steps+1
            if(cand<y&&!visited.has(cand)){
                q.push([cand,steps+1])
                visited.add(cand)
            }
        }
    }
    
    return -1
}