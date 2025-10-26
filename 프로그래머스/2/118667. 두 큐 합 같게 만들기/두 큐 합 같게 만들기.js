function solution(queue1, queue2) {
    let sum1 = queue1.reduce((a,b)=>a+b)
    let sum2 = queue2.reduce((a,b)=>a+b)
    let sum = sum1 + sum2
    let count = 0
    let limit = (queue1.length + queue2.length) * 2;
    let i1=0,i2=0
    
    if(sum%2!==0) return -1
    
    let arr = [...queue1, ...queue2];
    
    while(count<=limit){
        if(sum1===sum/2) return count
        if(sum1>sum/2){
            sum1-=arr[i1]
            i1++            
        }else{
            sum1+=arr[(i2 + queue1.length) % arr.length]
            i2++
        }
        count++
    }
    
    return -1
}