function solution(want, number, discount) {
    var answer = 0;
    
    for(let pos=0;pos<discount.length;pos++){
        let wants = {}
        let day = 0
        for(let i=0;i<want.length;i++){
            wants[want[i]] = number[i]
        }
        
        
        for(let i=pos;i<discount.length&&day!==10;i++){
            const cur = discount[i]
            if(wants[cur]>0){
                wants[cur] -= 1
            }
            day++
        }
        
        answer+=Object.values(wants).every(val => val===0) ? 1 : 0
    }
    
    return answer;
}