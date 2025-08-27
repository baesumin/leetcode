function solution(t, p) {
    var answer = 0;
    
    for(let i=0;i<=t.length-p.length;i++){
        let str = t.slice(i,i+p.length)
        if(+str<=+p) answer++
    }
    
    return answer;
}