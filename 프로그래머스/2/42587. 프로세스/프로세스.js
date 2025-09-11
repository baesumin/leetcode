function solution(priorities, location) {
    let arr = priorities.map((p,i)=>({index:i,prior:p,visited:false})) 
    var answer = 0;
    let stack = []
    let order = priorities.sort((a,b)=>b-a)
    
    while(order.length!==0){
        for(let i=0;i<arr.length;i++){
            if(order[0]===arr[i].prior && !arr[i].visited){
                stack.push(arr[i])
                arr[i].visited = true
                order.shift()
            }
        }
    }
    
    return stack.findIndex(v=>v.index===location)+1;
}