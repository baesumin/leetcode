function solution(arr) {
    let result = 1
    
    for(let i=0;i<arr.length;i++){
        result = lcm(result,arr[i])
    }
    
    return result
}

const gcd = (a,b) => b===0 ? a : gcd(b,a%b)
const lcm = (a,b) => (a*b) / gcd(a,b)