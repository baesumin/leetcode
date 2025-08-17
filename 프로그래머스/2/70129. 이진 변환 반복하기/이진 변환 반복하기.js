function solution(s) {
    let cnt = 0
    let zeroCnt = 0
    
    while(true){
        cnt++
        let temp = ''
        
        for(let i=0;i<s.length;i++){
            if(s[i]==='0'){
                zeroCnt++
            }else{
                temp+=s[i]
            }
        }
        
        s = temp.length.toString(2)
        
        if(s==='1') break
    }
    
    console.log([cnt,zeroCnt])
    return [cnt,zeroCnt];
}