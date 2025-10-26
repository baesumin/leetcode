function solution(queue1, queue2) {
    const queue = [...queue1, ...queue2];
    let sum1 = queue1.reduce((a, b) => a + b, 0);
    const target = (sum1 + queue2.reduce((a, b) => a + b, 0)) / 2;
    
    let start = 0;
    let end = queue1.length;
    let count = 0;
    const maxCount = queue.length * 2;
    
    while (count < maxCount) {
        if (sum1 === target) return count;
        
        if (sum1 > target) {
            sum1 -= queue[start];
            start++;
        } else {
            sum1 += queue[end];
            end++;
        }
        count++;
    }
    
    return -1;
}
