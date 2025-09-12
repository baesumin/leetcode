function solution(topping) {
    let answer = 0
    let leftMap = {}
    let rightMap = {}
    let leftCnt = 0
    let rightCnt = 0
    
    for(let i=0;i<topping.length;i++){
        let cur = topping[i]
        if(rightMap[cur]){
            rightMap[cur] = rightMap[cur]+1
        }else{
            rightMap[cur] = 1
            rightCnt++
        }
    }
    
    for(let i=0;i<topping.length;i++){
        let cur = topping[i]
        if(leftMap[cur]){
            leftMap[cur] = leftMap[cur]+1
        }else{
            leftMap[cur] = 1
            leftCnt++
        }
        
        rightMap[cur] = rightMap[cur]-1
        
        if(rightMap[cur]===0){
            rightCnt--
        }
        
        if(leftCnt===rightCnt){
            answer++
        }
    }
    
    return answer
}