function solution(s) {
    let arr = s.split(' ').map(Number)
    let min = Infinity
    let max = -Infinity
    
    for(let i=0;i<arr.length;i++){
        min = Math.min(min,arr[i])
        max = Math.max(max,arr[i])
    }
    
    return `${min} ${max}`;
}