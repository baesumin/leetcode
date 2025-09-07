function solution(dartResult) {
    var answer = 0;
    let stack = []
    let num = 0
    
    for(let i=0;i<dartResult.length;i++){
        let cur = dartResult[i]
        
        if(!isNaN(cur)){
            if(cur==='0' && dartResult[i-1]==='1'){
                num = 10
            }else{
                num = +cur
            }
            continue
        }
        
        if(cur==='S')stack.push(num ** 1)
        if(cur==='D')stack.push(num ** 2)
        if(cur==='T')stack.push(num ** 3)
        
        const last = stack.length - 1;
        if(cur==='*'){
            stack[last] *= 2;
            if (last > 0) stack[last - 1] *= 2;
        }else if(cur==='#'){
             stack[last] *= -1;
        }
    }
    
    
    return stack.reduce((a, b) => a + b, 0);;
}