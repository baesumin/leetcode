function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let count = 0;
    let answer = 0;
    let found = false;
    
    let dfs = (depth, target, word) => {
        if(found||depth>5)return
        
        if(word===target){
            found=true
            answer=count
            return
        }
        
        count++
        
        for(let v of vowels){
            dfs(depth+1,target,word+v)
        }
        
    }
    
    dfs(0,word,"")
    
    return answer
}