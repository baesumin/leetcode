function solution(skill, skill_trees) {
    let answer = 0
    let order = [...skill]
    
    for(let i=0;i<skill_trees.length;i++){
        let skillArr = [...skill_trees[i]]
        let pos = 0
        let possible = true
        for(let j=0;j<skillArr.length;j++){
            if(order[pos]!==skillArr[j]&&order.includes(skillArr[j])){
                possible = false
                break
            }
            
            if(skillArr[j]===order[pos]){
                pos++
            }
        }
        answer+=possible?1:0
    }
    
    return answer
}