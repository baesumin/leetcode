function solution(n) {
    var answer = 0;
    
    let F = Array.from({length:n+1},()=>0)
    F[1] = 1
    
    for(let i=2;i<=n;i++){
        F[i] = (F[i-1] + F[i-2])%1234567
    }
    
    return F[n];
}