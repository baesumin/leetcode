function solution(n, m, section) {
    var answer = 0;
    let paintEnd = 0
    
    for(let i=0;i<section.length;i++){
        if(section[i]>paintEnd){
            answer++
            paintEnd = section[i]+m-1
        }
    }
    
    return answer;
}