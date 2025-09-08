function solution(k, dungeons) {
    let max = 0
    let n = dungeons.length
    let visited = Array(n).fill(false)
    
    const find = (remain,count) => {
        max = Math.max(max,count)
        
        for(let i=0;i<n;i++){
            if(!visited[i] && remain>=dungeons[i][0]){
                visited[i] = true
                find(remain-dungeons[i][1],count+1)
                visited[i] = false
            }
        }
    }
    
    find(k,0)

    return max;
}