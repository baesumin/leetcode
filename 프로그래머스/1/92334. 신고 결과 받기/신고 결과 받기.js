function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    let reportsMap = {};
    let userReportMap = {};
    
    id_list.forEach(id => {
        reportsMap[id] = 0;
        userReportMap[id] = new Set();
    });

    report.forEach(entry => {
        let [from, to] = entry.split(' ');
        userReportMap[from].add(to);
    });

    Object.values(userReportMap).forEach(set => {
        set.forEach(to => {
            reportsMap[to]++;
        });
    });

    let banned = new Set(
        Object.entries(reportsMap)
              .filter(([id, cnt]) => cnt >= k)
              .map(([id, cnt]) => id)
    );

    id_list.forEach((id, i) => {
        userReportMap[id].forEach(reportedUser => {
            if (banned.has(reportedUser)) {
                answer[i]++;
            }
        });
    });

    return answer;
}
