function solution(number, limit, power) {
    const arr = []
    for(let i=1;i<=number;i++){
        arr.push(getDivisor(i))
    }
    
    return arr.map(v=>v>limit?power:v).reduce((acc,cur)=>acc+cur);
}

const getDivisor = (number) => {
    let cnt = 0
    
    for(let i=1;i<=Math.floor(Math.sqrt(number));i++){
        if(number%i===0){
            if(number/i===i)cnt++
            else cnt+=2
        }
    }
    
    return cnt
}