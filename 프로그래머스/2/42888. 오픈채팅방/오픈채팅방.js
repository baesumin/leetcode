function solution(record) {
    const userMap = {};
    const actions = [];
    
    for(let i = 0; i < record.length; i++) {
        const [action, id, nickname] = record[i].split(' ');
        
        if(action === 'Enter' || action === 'Change') {
            userMap[id] = nickname;
        }
        
        if(action !== 'Change') {
            actions.push({action, id}); 
        }
    }
    
    return actions.map(({action, id}) => {
        const nickname = userMap[id];
        return action === 'Enter' 
            ? `${nickname}님이 들어왔습니다.`
            : `${nickname}님이 나갔습니다.`;
    });
}