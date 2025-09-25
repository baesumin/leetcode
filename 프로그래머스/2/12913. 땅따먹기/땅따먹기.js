function solution(land) {
    var answer = 0;

    for (let r = 1; r < land.length; r++) {
        land[r][0] += Math.max(land[r-1][1], land[r-1][2], land[r-1][3]);
        land[r][1] += Math.max(land[r-1][0], land[r-1][2], land[r-1][3]);
        land[r][2] += Math.max(land[r-1][0], land[r-1][1], land[r-1][3]);
        land[r][3] += Math.max(land[r-1][0], land[r-1][1], land[r-1][2]);
    }

    answer = Math.max(...land[land.length - 1]);
    return answer;
}