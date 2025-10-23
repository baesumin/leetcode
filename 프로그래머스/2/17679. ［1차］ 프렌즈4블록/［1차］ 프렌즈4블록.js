function solution(m, n, board) {
    let answer = 0;
    board = board.map(row => row.split(''));
    
    while (true) {
        const toRemove = new Set();
        
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const current = board[i][j];
                if (current !== '' && 
                    current === board[i][j+1] && 
                    current === board[i+1][j] && 
                    current === board[i+1][j+1]) {
                    toRemove.add(`${i},${j}`);
                    toRemove.add(`${i},${j+1}`);
                    toRemove.add(`${i+1},${j}`);
                    toRemove.add(`${i+1},${j+1}`);
                }
            }
        }
        
        if (toRemove.size === 0) break;
        
        answer += toRemove.size;
        toRemove.forEach(pos => {
            const [i, j] = pos.split(',').map(Number);
            board[i][j] = '';
        });
        
        for (let j = 0; j < n; j++) {
            const column = [];
            for (let i = m - 1; i >= 0; i--) {
                if (board[i][j] !== '') {
                    column.push(board[i][j]);
                }
            }
            
            for (let i = m - 1; i >= 0; i--) {
                board[i][j] = column[m - 1 - i] || '';
            }
        }
    }
    
    return answer;
}
