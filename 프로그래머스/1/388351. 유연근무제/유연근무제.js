function solution(schedules, timelogs, startday) {
    var answer = 0;
    
    const add10 = (time) => {
        let hour = Math.floor(time/100)
        let min = time%100
        min+=10
        
        if(min>=60){
            hour++
            min-=60
        }
        return hour*100+min
    }
    
    for(let i=0;i<timelogs.length;i++){
        let day = startday
        let allDone = true
        let lateLimit = add10(schedules[i]);
        for(let j=0;j<timelogs[i].length;j++){
            if (day >= 1 && day <= 5) {
                if (timelogs[i][j] > lateLimit) {
                    allDone = false;
                    break;
                }
            }
            day = day === 7 ? 1 : day + 1;
        }
        
        if(allDone)answer++
    }
    
    return answer;
}