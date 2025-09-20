function solution(park, routes) {
    var answer = [];
    let n = park.length
    let m = park[0].length
    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(park[i][j]==='S'){
                answer = [i,j]
            }
        }
    }
    
    const moves = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1],
    };
    
    for(let i=0;i<routes.length;i++){
        let [dir, cnt] = routes[i].split(' ')
        let cur = [answer[0], answer[1]]
        
        for(let j=0;j<Number(cnt);j++){
            let nx = moves[dir][0] + cur[0]
            let ny = moves[dir][1] + cur[1]

            if (nx < 0 || nx >= n || ny < 0 || ny >= m) { cur = [answer[0], answer[1]]; break; }
            if (park[nx][ny] === 'X') { cur = [answer[0], answer[1]]; break; }
            
            cur = [nx, ny]
        }
        
        answer = cur
    }
    return answer;
}