function solution(answers) {
    var answer = [];
    
    let m1 = '12345'.repeat(2000)
    let m2 = '21232425'.repeat(1250)
    let m3 = '3311224455'.repeat(1000)
    let str = answers.join('')
    
    let scores = [{name:1,value:0},{name:2,value:0},{name:3,value:0}]
    
    for(let i=0;i<str.length;i++){
        if(str[i]===m1[i]) scores[0].value++
        if(str[i]===m2[i]) scores[1].value++
        if(str[i]===m3[i]) scores[2].value++
    }
    scores.sort((a,b)=>b.value-a.value)
    
    let max = scores[0].value
    answer.push(scores[0].name)
    
    for(let i=1;i<scores.length;i++){
        if(max===scores[i].value){
            answer.push(scores[i].name)
        }
    }
    
    return answer;
}