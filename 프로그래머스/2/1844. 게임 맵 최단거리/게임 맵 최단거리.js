function solution(maps) {
    var answer = 0;
    let q = []
    let dx = [1,-1,0,0]
    let dy = [0,0,1,-1]
    let n = maps.length
    let m = maps[0].length
    let visited = Array.from({length:n},()=>Array(m).fill(false))
    
    q.push({x:0,y:0})
    visited[0][0] = true
    
    while(q.length){
        let {x,y} = q.shift()
        
        for(let i=0;i<4;i++){
            let nx = dx[i] + x
            let ny = dy[i] + y
            
            if(nx>=0&&nx<n&&ny>=0&&ny<m){
                if(maps[nx][ny]!==0 && !visited[nx][ny]){
                    visited[nx][ny] = true
                    maps[nx][ny] = maps[x][y] + 1
                    q.push({x:nx,y:ny})
                }
            }
        }
    }
    
    return maps[n-1][m-1]!==1 ? maps[n-1][m-1] : -1
}