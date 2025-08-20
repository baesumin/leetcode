function solution(x) {
    let digitSum = String(x).split('').map(Number).reduce((acc,cur)=>acc+cur)
    if(x%digitSum===0) return true
    
    return false;
}