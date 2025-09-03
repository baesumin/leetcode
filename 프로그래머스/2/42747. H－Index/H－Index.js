function solution(citations) {
    citations.sort((a, b) => a - b);
    let n = citations.length;
    let h = 0;
    for(let i = 0; i < n; i++){
        let candidate = n - i;
        if(citations[i] >= candidate){
            h = candidate;
            break;
        }
    }
    return h;
}