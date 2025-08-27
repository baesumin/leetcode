function solution(d, budget) {
    d.sort((a,b)=>a-b)
    var answer = 0;
    
    for(let i=0;i<d.length;i++){
        if(budget-d[i]>=0) {
            budget-=d[i]
            answer++
        }
        else break
    }
    
    return answer;
}