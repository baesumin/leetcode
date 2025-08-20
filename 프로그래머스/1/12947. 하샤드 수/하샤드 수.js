function solution(x) {
    let digitSum = String(x).split('').map(Number).reduce((acc,cur)=>acc+cur)
    return x%digitSum===0;
}