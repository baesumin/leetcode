function solution(numbers) {
    let n = numbers.length
    var answer = new Array(n).fill(-1)
    let stack = []
    
    for(let i=0;i<numbers.length;i++){
        while(stack.length && numbers[stack.at(-1)]<numbers[i]){
            let j = stack.pop()
            answer[j] = numbers[i]
        }
        
        stack.push(i)
    }
    
    return answer;
}