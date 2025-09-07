function solution(lottos, win_nums) {
    let set = new Set(win_nums)
    let cnt = 0
    let zeroCnt = 0
    
    let results = {6:1,5:2,4:3,3:4,2:5,1:6,0:6}
    
    for(let num of lottos){
        if(num===0)zeroCnt++
        if(set.has(num))cnt++
    }
    
    return [results[cnt+zeroCnt],results[cnt]]
}