function solution(numbers, target) {
    var answer = 0;
    
    let helper = (pos,sum) => {
        if (pos === numbers.length) {
          if (sum === target) answer++;
          return;
        }
        
        helper(pos+1,sum+numbers[pos])
        helper(pos+1,sum-numbers[pos])
    }
    
    helper(0,0)
    
    return answer;
}