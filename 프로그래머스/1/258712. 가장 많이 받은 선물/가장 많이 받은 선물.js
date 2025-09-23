function solution(friends, gifts) {
    let friendsMap = {}
    let pointMap = {}

    for (let f of friends){
        friendsMap[f] = {};
        pointMap[f] = 0
    }

    for(let g of gifts){
        let [from, to] = g.split(' ')
        friendsMap[from][to] = (friendsMap[from][to] || 0) + 1;
        pointMap[to] -= 1;
    }

    Object.entries(friendsMap).forEach((v1)=>{
        let curPerson = v1[0]
        Object.entries(v1[1]).forEach((v2)=>{
            pointMap[curPerson] += v2[1]
        })
    })
    
    const nextMonth = {};
    for (let f of friends) nextMonth[f] = 0;
    
    for (let i = 0; i < friends.length - 1; i++) {
        for (let j = i + 1; j < friends.length; j++) {
          const A = friends[i];
          const B = friends[j];

          const a2b = (friendsMap[A][B] || 0);
          const b2a = (friendsMap[B][A] || 0);

          if (a2b > b2a) {
            nextMonth[A] += 1;
          } else if (a2b < b2a) {
            nextMonth[B] += 1;
          } else {
            if (pointMap[A] > pointMap[B]) nextMonth[A] += 1;
            else if (pointMap[A] < pointMap[B]) nextMonth[B] += 1;
          }
        }
    }
    
    return Math.max(...friends.map(f => nextMonth[f]));
}