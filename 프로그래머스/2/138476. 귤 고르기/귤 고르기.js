function solution(k, tangerine) {
    let map = new Map()
    let remainK = k
    
    for(let i=0;i<tangerine.length;i++){
        let cur = tangerine[i]
        map.set(cur,(map.get(cur)||0)+1)
    }
    
    let arr = [...map].sort((a,b)=>b[1]-a[1])
    let cnt = 1
    
    for(let i=0;i<arr.length;i++){
        let remain = remainK-arr[i][1]
        if(remain<=0){
            break
        }else{
            remainK = remain
            cnt++
        }
    }
    
    return cnt
}