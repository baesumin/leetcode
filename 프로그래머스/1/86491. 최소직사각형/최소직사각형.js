function solution(sizes) {
    sizes.map((v)=>v.sort((a,b)=>a-b))
    var answer = 0;
    let maxW = Math.max(...sizes.map(v=>v[0]))
    let maxH = Math.max(...sizes.map(v=>v[1]))
    return maxW*maxH;
}