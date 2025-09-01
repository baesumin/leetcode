function solution(cards1, cards2, goal) {
    
    for(let i=0;i<goal.length;i++){
        let cur = goal[i]
        if(cur===cards1[0])cards1.shift()
        else if(cur===cards2[0])cards2.shift()
        else return 'No'
    }
    
    return 'Yes';
}