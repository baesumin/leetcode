function solution(progresses, speeds) {
    var answer = [];
    let pos = 0
    
    while(progresses.some(v=>v<100)){
        let sum = 0
        for(let i=pos;i<progresses.length;i++){
            if(progresses[i]>=100){
                sum++
                pos=i+1
                continue
            }
            break
        }
        
        for(let i=pos;i<progresses.length;i++){
            progresses[i]+=speeds[i]
        }
        
        
        if(sum>0)answer.push(sum)
    }
    
    answer.push(progresses.length - answer.reduce((acc,cur)=>acc+cur,0))
    
    return answer;
}