function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    let cur = Number(pos.split(':')[0]*60)+Number(pos.split(':')[1])
    let end = Number(video_len.split(':')[0]*60)+Number(video_len.split(':')[1])
    let op_start_time = Number(op_start.split(':')[0]*60)+Number(op_start.split(':')[1])
    let op_end_time = Number(op_end.split(':')[0]*60)+Number(op_end.split(':')[1])
    
    for(let i=0;i<commands.length;i++){
        if(commands[i]==='next'){
            if(cur>=op_start_time && cur<=op_end_time){
                cur=op_end_time
            }
            cur=Math.min(cur+10,end)
            if(cur>=op_start_time && cur<=op_end_time){
                cur=op_end_time
            }
        }else{
            if(cur>=op_start_time && cur<=op_end_time){
                cur=op_end_time
            }
            cur=Math.max(cur-10,0)
            if(cur>=op_start_time && cur<=op_end_time){
                cur=op_end_time
            }
            
        }
    }
    
    return (String(Math.floor(cur/60)).padStart(2,'0'))+":"+(String(cur%60).padStart(2,'0'))
}