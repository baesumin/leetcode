function jump(nums) {
    let jumps = 0;
    let left = 0;
    let right = 0;
    let farthest = 0;
    
    // 마지막 인덱스 직전까지만 순회
    while (right < nums.length - 1) {
        // 현재 범위 내에서 가장 멀리 갈 수 있는 위치 찾기
        for (let i = left; i <= right; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }
        
        // 다음 범위 설정
        left = right + 1;
        right = farthest;
        jumps++;
    }
    
    return jumps;
}
