function solution(name, yearning, photo) {
    var answer = [];
    
    let names = {}
    for(let i=0;i<name.length;i++){
        names[name[i]] = yearning[i]
    }
    
    for(let i=0;i<photo.length;i++){
        let sum = 0
        for(let j=0;j<photo[i].length;j++){
            sum+=names[photo[i][j]]??0
        }
        answer.push(sum)
    }
    
    return answer;
}