function solution(array, commands) {
    var answer = [];
    
    for(let i=0;i<commands.length;i++){
        let [start,end,k] = commands[i]
        let str = array.slice(start-1, end)
        answer.push(str.sort((a,b)=>a-b)[k-1])
    }
    
    return answer;
}