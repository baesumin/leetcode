function solution(n, k) {
    let s = n.toString(k)
    let arr = s.split('0').filter(v=>v!=='1' && v!=='')
    
    const isPrime = (str) => {
        let n = +str
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    return arr.filter(v=>isPrime(v)).map(Boolean).length
}