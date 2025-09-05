function solution(n) {
    var answer = 0;
    
    for(let i=2;i<=n;i++){
        if(isDecimal(i))answer++
    }
    
    return answer;
}

const isDecimal = (num) => {
    for(let i=2;i<=Math.floor(Math.sqrt(num));i++){
        if(num%i===0)return false
    }
    return true
}
