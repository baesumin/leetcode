function solution(ingredient) {
    var answer = 0;
    let stack = []
    
    for(let i=0;i<ingredient.length;i++){
        let cur = ingredient[i]
        stack.push(cur)
        
        while(stack.length>=4){
            if(stack.slice(-4).join('')==='1231'){
                stack.pop()
                stack.pop()
                stack.pop()
                stack.pop()
                answer++
            }else{
                break
            }
        }
        
        
    }
    
    return answer;
}