function solution(players, callings) {
    const pos = {}; 
    for (let i = 0; i < players.length; i++) {
        pos[players[i]] = i;
    }
    
    for (let c of callings) {
        let cur = pos[c];
        if (cur === 0) continue; 

        let prev = cur - 1;
        let frontPlayer = players[prev];

        players[prev] = c;
        players[cur] = frontPlayer;

        pos[c] = prev;
        pos[frontPlayer] = cur;
    }
    
    return players;
}