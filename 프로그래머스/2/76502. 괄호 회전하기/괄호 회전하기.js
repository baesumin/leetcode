function solution(s) {
    var answer = 0
    
    for(let i=0;i<s.length;i++){
        let str = s.slice(i) + s.slice(0,i)
        let stack = []
        let isValid = true
        
        for(let j=0;j<str.length;j++){
            let cur = str[j]
            if(cur==='('||cur==='['||cur==='{'){
                stack.push(str[j])
            }else{
                let pop = stack.pop()
                if(cur===')'&&pop!=='(' || cur===']'&&pop!=='[' || cur==='}'&&pop!=='{'){
                    isValid = false
                    break
                }
            }
        }
        if(stack.length !== 0) isValid = false;
        answer += isValid ? 1 : 0
    }
    
    return answer
}