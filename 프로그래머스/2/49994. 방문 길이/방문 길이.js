function solution(dirs) {
    let set = new Set()
    let cur = [0,0]
    
    let moves = {
        U:[0,1],
        D:[0,-1],
        L:[-1,0],
        R:[1,0]
    }
    
    for(let i=0;i<dirs.length;i++){
        let [dx,dy] = moves[dirs[i]]
        let [cx,cy] = cur
        
        if(cx+dx>=-5&&cx+dx<=5&&cy+dy>=-5&&cy+dy<=5){
            let newCur = [cx+dx,cy+dy]
            set.add(JSON.stringify([cur, newCur]))
            set.add(JSON.stringify([newCur, cur]))
            cur = newCur
        }
    }
    
    return set.size/2;
}