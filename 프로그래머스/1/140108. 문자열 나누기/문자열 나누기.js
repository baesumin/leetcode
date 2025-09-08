function solution(s) {
    if(s.length===1) return 1
    var answer = 0;
    let first = s[0]
    let words = {same:1,notSame:0}
    
    for(let i=1;i<s.length;i++){
        if(!first){
            if(i===s.length-1)answer++
            first=s[i]
            words.same = 1
            words.notSame = 0
            continue
        }
        
        if(s[i]===first)words.same++
        else words.notSame++
        
        
        if(words.same===words.notSame){
            answer++
            first = ''
            continue
        }
        
        if(i===s.length-1&&words.same!==words.notSame)answer++
    }
    
    
    return answer;
}