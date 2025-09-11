function solution(board, moves) {
    var answer = 0;
    let stack = []
    let n = board.length
    let m = board[0].length
    
    for(let i=0;i<moves.length;i++){
        for(let j=0;j<n;j++){
            let cur = board[j][moves[i]-1]
            if(cur!==0){
                if(stack.at(-1)===cur){
                    stack.pop()
                    answer+=2
                }else{
                    stack.push(cur)
                }
                board[j][moves[i]-1] = 0
                break
            }
        }
    }
    
    return answer;
}