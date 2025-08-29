function solution(elements) {
    let set = new Set()
    let doubled = elements.concat(elements);
    
    for(let cnt=1;cnt<=elements.length;cnt++){
        for(let i=0;i<elements.length;i++){
            let temp = doubled.slice(i,i+cnt)
            set.add(temp.reduce((acc,cur)=>acc+cur))
        }
    }
    
    
    return set.size;
}