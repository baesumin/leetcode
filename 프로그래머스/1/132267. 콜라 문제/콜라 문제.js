function solution(a, b, n) {
    var answer = 0;
    
    while(n>=a){
        let share = Math.floor(n/a)
        let remain = n%a
        answer+=share*b
        n=share*b+remain
    }
    
    return answer;
}