function solution(N, stages) {
    let arr = []
    
    for(let i=1;i<=N;i++){
        let sum = 0
        for(let j=0;j<stages.length;j++){
            if(stages[j]===i)sum++
        }
        arr.push({stage:i,value:sum/stages.filter(v=>v>=i).length})
    }
    

    return arr.sort((a,b)=>b.value-a.value).map(v=>v.stage)
}