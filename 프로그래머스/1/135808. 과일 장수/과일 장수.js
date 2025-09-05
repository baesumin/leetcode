function solution(k, m, score) {
    score.sort((a,b)=>b-a)
    
    let sum = 0
    let arr = chunk(score,m)
    let filtered = arr.filter(v=>v.length===m)
    
    for(let i=0;i<filtered.length;i++){
        let p = filtered[i].at(-1)
        sum+= p*m
    }
    
    return sum
}

function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}