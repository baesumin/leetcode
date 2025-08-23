function solution(people, limit) {
    let arr = people.sort((a,b)=>a-b)
    let start = 0
    let end = arr.length-1
    let res = 0
    while(start<=end){
        if(arr[start]+arr[end]<=limit){
            res++
            start++
            end--
        }else{
            res++
            end--
        }
    }
    
    return res
}