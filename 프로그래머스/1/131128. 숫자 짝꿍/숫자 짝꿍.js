function solution(X, Y) {
    let cntX = Array(10).fill(0)
    let cntY = Array(10).fill(0)
    for (let i of X) cntX[i]++
    for (let i of Y) cntY[i]++
    
    let answer = ''
    
    for(let i=9;i>=0;i--){
        let repeat = Math.min(cntX[i],cntY[i])
        answer += String(i).repeat(repeat)
    }
    
    if(!answer) return '-1'
    if([...answer].every(v=>v==='0')) return '0'
    return answer
}