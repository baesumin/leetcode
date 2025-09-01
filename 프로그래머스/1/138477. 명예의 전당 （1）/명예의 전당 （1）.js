function solution(k, score) {
    var answer = [];
    let stack = []
    
    for(let i=0;i<score.length;i++){
        if(stack.length!==k){
            stack.push(score[i])
            stack.sort((a,b)=>a-b)
        }else{
            if(score[i]>stack[0]){
                stack.shift()
                stack.push(score[i])
                stack.sort((a,b)=>a-b)
            }
            
        }
        answer.push(stack[0])
    }
    
    return answer;
}