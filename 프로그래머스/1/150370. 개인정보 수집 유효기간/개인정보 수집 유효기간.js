function solution(today, terms, privacies) {
    var answer = [];
    
    let termsMap = {}
    for(term of terms){
        let [kind, remain] = term.split(' ')
        termsMap[kind] = +remain
    }
    
    let [ty,tm,td] = today.split('.').map(Number)
    let todayDate = ty*12*28+tm*28+td
    
    privacies.forEach((privacy, i) => {
        let [date, type] = privacy.split(' ');
        let [py,pm,pd] = date.split('.').map(Number)
        pm += termsMap[type]
        
        py += Math.floor((pm - 1) / 12);
        pm = ((pm - 1) % 12) + 1;
        
        let expireDate = py * 12 * 28 + pm * 28 + pd - 1;
        if (todayDate > expireDate) answer.push(i + 1);
    })
    
    return answer;
}