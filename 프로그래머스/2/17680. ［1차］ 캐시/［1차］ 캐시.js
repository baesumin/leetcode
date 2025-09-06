function solution(cacheSize, cities) {
    if(cacheSize===0)return cities.length*5
    cities=cities.map(v=>v.toLowerCase())
    
    var answer = 0;
    let arr = []
    
    for(let i=0;i<cities.length;i++){
        let cur = cities[i]
        let index = arr.findIndex(v=>v===cur)
        
        if (index !== -1) {
            answer += 1;
            arr.splice(index, 1); 
            arr.push(cur);
        } else {
            answer += 5;
            if (arr.length >= cacheSize) arr.shift();
            arr.push(cur);
        }
    }
    
    return answer;
}