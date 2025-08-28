function solution(s) {
    var answer = '';
    let cnt = 0
    
    for(let i=0;i<s.length;i++){
        if(s[i]===' ')cnt=-1
        if(cnt%2===0)answer+=s[i].toUpperCase()
        else answer+=s[i].toLowerCase()
        cnt++
    }
    
    return answer;
}