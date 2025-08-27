function solution(n, words) {
    var answer = [];

    let set = new Set([words[0]])
    let cur = words[0]
    let end = false
    
    for(let i=1;i<words.length;i++){
        if(cur.at(-1)!==words[i][0] || set.has(words[i])){
            end = true
            answer = [(i % n) + 1,Math.floor(i / n) + 1 ]
            break
        }
        set.add(words[i])
        cur = words[i]
    }

    return end ? answer : [0,0]
}