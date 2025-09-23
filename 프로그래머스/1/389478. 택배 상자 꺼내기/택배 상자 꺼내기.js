function solution(n, w, num) {
    var answer = 0;
    let arr = Array.from({length: Math.ceil(n/w)}, () => new Array(w).fill(0));
    let dir = 'right';
    let depth = arr.length - 1;
    let cur = 1;
    let map = {}
    
    while (cur <= n) {
        if (dir === 'right') {
            dir = 'left';
            for (let i = 0; i < w && cur <= n; i++) {
                map[cur] = i
                arr[depth][i] = cur++;
            }
        } else {
            dir = 'right';
            for (let i = w - 1; i >= 0 && cur <= n; i--) {
                map[cur] = i
                arr[depth][i] = cur++;
            }
        }
        depth--;
    }
    let x = map[num]
    
    for(let i=0;i<arr.length;i++){
        if(arr[i][x]===num)break
        if(arr[i][x]!==0)answer++
    }
    
    
    return answer+1
}