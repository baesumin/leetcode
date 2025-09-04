function solution(clothes) {
    let cl = {}
    
    for(let i=0;i<clothes.length;i++){
        let [_,kind] = clothes[i]
        if(cl[kind]){
            cl[kind]++
        }else{
            cl[kind] = 1
        }
    }
    
    return Object.values(cl).reduce((acc,cur)=>acc*(cur+1),1)-1;
}