function solution(s){
    let count = 0 
    
    if(s.length%2!==0) return false
    
    for(let i=0;i<s.length;i++){
        let char = s[i]
        if(char==='('){
            count++
        }else{
            if(count===0) return false
            else count--
        }
    }

    return count===0;
}