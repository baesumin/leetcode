function solution(num) {
    let cnt = 0
    
    while(cnt!==500 && num!==1){
        if(num%2===0){
            num=num/2
        }else{
            num=num*3+1
        }
        cnt++
    }
    
    return cnt===500?-1:cnt;
}