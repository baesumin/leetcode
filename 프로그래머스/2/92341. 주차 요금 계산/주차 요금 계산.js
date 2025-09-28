function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees; 
    const inMap = {};             
    const acc = {};               

    for (const line of records) {
        const [ts, car, act] = line.split(' ');               
        const [hh, mm] = ts.split(':');                   
        const t = (+hh) * 60 + (+mm);                  

        if (act === 'IN') {
          inMap[car] = t;                             
        } else {
          const diff = t - inMap[car];                        
          acc[car] = (acc[car] || 0) + diff;                 
          delete inMap[car];                               
        }
    }

    const end = 23 * 60 + 59;                           
    for (const car in inMap) {
        const diff = end - inMap[car];                  
        acc[car] = (acc[car] || 0) + diff;          
    }

    const arr = Object.entries(acc)
        .sort((a,b) => a[0].localeCompare(b[0]))      
        .map(([car, total]) => {
          const extra = Math.max(0, total - basicTime);      
          const units = Math.ceil(extra / unitTime);         
          const money = basicFee + (extra > 0 ? units * unitFee : 0); 
          return [car, money];                         
        });

    return arr.map(v=>v[1])
}