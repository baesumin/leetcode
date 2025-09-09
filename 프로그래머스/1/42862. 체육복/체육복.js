function solution(n, lost, reserve) {
    var answer = 0;
    
    let arr = Array(n).fill(1)
    lost.forEach(v=>arr[v-1]--)
    reserve.forEach(v=>arr[v-1]++)
    
    for(let i=0;i<n;i++){
        if(arr[i]===0){
            if(arr[i-1] === 2) {arr[i]++;arr[i-1]--}
            else if(arr[i+1] === 2) {arr[i]++;arr[i+1]--}
        }
    }
    
    return arr.filter(v=>v>0).length
}