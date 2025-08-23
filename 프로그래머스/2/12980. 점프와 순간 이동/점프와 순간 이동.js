function solution(n)
{
    var ans = 0;

    while(true){
        if(n===0){
            break
        }
        if(n%2===0){
            n/=2
        }else{
            n--
            ans++
        }
    }

    return ans;
}