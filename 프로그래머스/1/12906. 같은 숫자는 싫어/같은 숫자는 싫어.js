function solution(arr)
{
    let answer = [arr[0]]
    let cur = arr[0]
    
    for(let i=1;i<arr.length;i++){
        if(cur!==arr[i]) {
            answer.push(arr[i])
            cur = arr[i]
        }
    }
    
    return answer
}