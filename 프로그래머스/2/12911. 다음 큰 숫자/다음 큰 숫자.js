function solution(n) {
    var answer = 0;
    let n2 = n.toString(2)
    
    while(true){
        let cur = n+1
        let cur2 = (n+1).toString(2)
        
        if(cur2.replaceAll('0','').length===n2.replaceAll('0','').length) return cur
        n+=1
    }
    
    return answer;
}