function solution(s, n) {
    var answer = '';
    
    for(let i=0;i<s.length;i++){
        if(s[i] === ' '){
            answer+= ' '
            continue
        }
        let num = s[i].charCodeAt(0)
        if(isLower(s[i])){
            if(num+n>122){
                num = num + n - 122 + 96
            }else{
                num = num + n
            }
        }else{
            if(num+n>90){
                num = num + n - 90 + 64
            }else{
                num = num + n
            }
        }
        
        answer += String.fromCharCode(num)
    }
    
    return answer;
}

function isLower(char) {
  return char === char.toLowerCase() && char !== char.toUpperCase();
}