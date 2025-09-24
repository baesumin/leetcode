function solution(msg) {
    let dict = new Map();
    for (let i = 0; i < 26; i++) dict.set(String.fromCharCode(65 + i), i + 1);
    let nextIdx = 27;
    
    let answer = [];   
    let i = 0;
    
    while(i<msg.length){
        let j = i + 1
        let w = msg[i];
        while(j<=msg.length){
            const cand = msg.slice(i,j)
            if(dict.has(cand)){
                w=cand
                j++
            }else{
                break
            }
        }
        
        answer.push(dict.get(w))
        
        if(j<=msg.length){
            const wc = msg.slice(i, j)
            dict.set(wc, nextIdx++);
        }
        
        i += w.length;
    }
    
    return answer;
}