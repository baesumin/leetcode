function solution(numbers) {
    let result = 0
    let set = new Set()
    let arr = [...numbers]
    
    const isPrime = (num) => {
        if(num===1) return false
        
        let prime = new Array(num + 1).fill(true)
        prime[0] = false
        prime[1] = false
        
        for(let i=2;i*i<=num;i++){
            if(prime[i]){
                for(let j=i*i;j<=num;j+=i){
                    prime[j] = false
                }
            }
        }
        
        return prime[num]
    }
    
    const perm = (arr, n) => {
        if (n === 1) return arr.map(v => [v]);
        const result = [];
        arr.forEach((v, i) => {
          const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
          result.push(...perm(rest, n - 1).map(p => [v, ...p]));
        });
        return result;
    }
     
    for(let i=1;i<=arr.length;i++){
        perm(arr,i).forEach(v=>{
            set.add(+v.join(''))
        })
    }
    set.forEach(v=>{
        if(isPrime(v)){
            result++
        }
    })
    
    return result

}
