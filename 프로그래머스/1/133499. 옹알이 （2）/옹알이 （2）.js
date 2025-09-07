function solution(babbling) {
    var answer = 0;
    let arr = ["aya", "ye", "woo", "ma"]
    
    for(let i=0;i<babbling.length;i++){
        for(let j=0;j<arr.length;j++){
            babbling[i] = babbling[i].replaceAll(arr[j]+arr[j],'#')
        }
    }
    
    for(let i=0;i<babbling.length;i++){
        for(let j=0;j<arr.length;j++){
            babbling[i] = babbling[i].replaceAll(arr[j],' ')
        }
    }
    
    return babbling.filter(v=>v.trim().length===0).length
}