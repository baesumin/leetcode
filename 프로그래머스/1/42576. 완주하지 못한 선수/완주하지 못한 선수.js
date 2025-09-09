function solution(participant, completion) {
    var answer = '';
    
    let parts = {}
    
    for(let i=0;i<participant.length;i++){
        let cur = participant[i]
        parts[cur] = (parts[cur] || 0) + 1
    }
    
    for(let i=0;i<completion.length;i++){
        let cur = completion[i]
        parts[cur] = parts[cur]-1
    }
    
    return Object.entries(parts).find(v=>v[1]===1)[0]
}