// function solution(n) {
//     var answer = 0;
//     let tempSum = 0
//     let arr = [0]
    
//     for(let i=1;i<=n;i++){
//         tempSum += i;
//         arr.push(tempSum)
//     }
    
//     let start = 0;
//     for (let end = 1; end < arr.length; end++) {
//         while (arr[end] - arr[start] > n) start++;
//         if (arr[end] - arr[start] === n) answer++;
//     }
    
//     return answer;
// }

function solution(n) {
    let answer = 0
    let start = 1, end = 1, sum = 1
    
    while(start<=n){
        if(sum>n){
            sum-=start
            start++
        }else if(sum===n){
            answer++
            sum-=start
            start++
        }else{
            end++
            sum+=end
        }
    }
    
    return answer
}