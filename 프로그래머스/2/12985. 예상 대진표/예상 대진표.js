function solution(n,a,b)
{
    var answer = 0;

    while(true){
        if (a === b) {
            return answer;
        }
        // if(Math.abs(a-b)===1 && Math.floor(a/2)+1===Math.floor(b/2)){
        //     return answer+1
        // }
        answer++
        a=Math.ceil(a/2)
        b=Math.ceil(b/2)
    }

    return answer;
}

// 4 7
// 2 4
// 1 2