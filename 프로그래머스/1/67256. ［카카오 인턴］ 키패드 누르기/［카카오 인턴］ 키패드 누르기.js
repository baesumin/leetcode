function solution(numbers, hand) {
    var answer = '';
    
    const pos = {
      1:[0,0],2:[0,1],3:[0,2],
      4:[1,0],5:[1,1],6:[1,2],
      7:[2,0],8:[2,1],9:[2,2],
      '*':[3,0],0:[3,1],'#':[3,2]
    };
    
    let leftPos = pos['*'];
    let rightPos = pos['#'];
    
    const dist = (a,b) => {
        return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]);
    }
    
    for(let i=0;i<numbers.length;i++){
        let cur = numbers[i]
        let x = cur%3-1
        
        if(cur===1||cur===4||cur===7){
            leftPos = pos[cur]
            answer+='L'
        }else if(cur===3||cur===6||cur===9){
            rightPos =  pos[cur]
            answer+='R'
        }else{
            const l = dist(leftPos, pos[cur]);
            const r = dist(rightPos, pos[cur]);
             if (l < r) {
                leftPos = pos[cur];
                answer += 'L';
              } else if (l > r) {
                rightPos = pos[cur];
                answer += 'R';
              } else {
                if (hand === 'right') {
                  rightPos = pos[cur];
                  answer += 'R';
                } else {
                  leftPos = pos[cur];
                  answer += 'L';
                }
            }
        }
    }
    
    return answer;
}
