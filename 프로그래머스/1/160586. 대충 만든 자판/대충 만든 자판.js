function solution(keymap, targets) {
    var answer = [];
    
    for(let i=0;i<targets.length;i++){
        let sum = 0
        let cur = targets[i]
        for(let j=0;j<cur.length;j++){
            let char = cur[j]
            let min = 101
            for(let k=0;k<keymap.length;k++){
                let index = [...keymap[k]].indexOf(char)
                if(index!==-1){
                    min = Math.min(min,index+1)
                }
            }
            if(min===101){
                sum = -1
                break
            }else{
                sum+=min
            }
        }
        answer.push(sum)
    }
    
    return answer;
}