function solution(nums) {
    var answer = 0;
    let arr = []
    
    for(let i=0;i<nums.length-2;i++){
       for(let j=i+1;j<nums.length-1;j++){
         for(let k=j+1;k<nums.length;k++){
            let sum = nums[i]+nums[j]+nums[k]
            arr.push(sum)
         } 
       } 
    }
    
    for(let i=0;i<arr.length;i++){
        if(isDecimal(arr[i]))answer++
    }
    
    
    return answer;
}

const isDecimal = (num) => {
    for(let i=2;i<=Math.floor(Math.sqrt(num));i++){
        if(num%i===0)return false
    }
    return true
}