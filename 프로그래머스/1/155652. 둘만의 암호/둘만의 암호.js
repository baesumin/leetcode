function solution(s, skip, index) {
    var answer = '';
    let words = s
    
    let temp = 'abcdefghijklmnopqrstuvwxyz'
    for(let char of skip){
        temp = temp.replace(char,'')
    }
    temp = temp.repeat(3)
    
    for(let char of words){
        let i = [...temp].findIndex(v=>v===char)
        answer+=temp[index+i]
    }
    
    return answer;
}