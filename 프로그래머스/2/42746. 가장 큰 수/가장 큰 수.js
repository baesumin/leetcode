function solution(numbers) {
    let answer = numbers.map(String).sort((a,b)=>{
        let aa = a+b
        let bb = b+a
        return bb-aa 
    }).join('')
    
    return answer[0]==='0'?'0':answer
}