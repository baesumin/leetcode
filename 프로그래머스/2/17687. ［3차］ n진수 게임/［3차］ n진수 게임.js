function solution(n, t, m, p) {
    let s = "";                      
    let num = 0;                      
    while (s.length < t * m) {       
        s += num.toString(n).toUpperCase();
        num++;
    }
    let ans = "";
    for (let i = 0; i < t; i++) {     
        ans += s[p - 1 + i * m];        
    }
    return ans;  
}