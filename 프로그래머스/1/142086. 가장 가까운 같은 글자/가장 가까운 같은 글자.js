function solution(s) {
    var answer = [];
    let words = {}
    
    for(let i=0;i<s.length;i++){
        let cur = s[i]
        if(words[cur] === undefined){
            answer.push(-1)
        }else{
            answer.push(i-words[cur])
        }
        words[cur] = i
    }
  
    return answer;
}