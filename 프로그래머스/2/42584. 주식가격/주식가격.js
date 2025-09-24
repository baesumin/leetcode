function solution(prices) {
    var answer = [];
    
    for(let i=0;i<prices.length;i++){
        let cur = prices[i]
        let cnt = 0
        
        for(let j=i+1;j<prices.length;j++){
            if(prices[j]<cur){
                cnt++
                break
            }
            cnt++
        }
        answer.push(cnt)
    }
    
    return answer;
}