function solution(s) {
    var answer = '';
    let words = {
        0:'zero',
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine',
    }
    
    let map = new Map(Object.entries(words).map(([key, value]) => [value, key]))
    let temp = ''
    
    for(let i=0;i<s.length;i++){
        let char = s[i]
        if(!isNaN(+char)){
            answer+=char
        }else{
            temp+=char
            if(map.has(temp)){
                answer+=map.get(temp)
                temp=''
            }
        }
    }
    return +answer;
}