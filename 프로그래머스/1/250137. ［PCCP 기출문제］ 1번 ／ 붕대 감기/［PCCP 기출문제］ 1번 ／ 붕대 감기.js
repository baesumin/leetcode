function solution(bandage, health, attacks) {
    let [t, x, y] = bandage;
    let cur = health;
    let prev = 0;
    
    for (const [time, dmg] of attacks) {
        const gap = time - prev - 1;
        if (gap > 0) {
          const extra = Math.floor(gap / t) * y;
          cur = Math.min(health, cur + gap * x + extra);
        }
        cur -= dmg;
        if (cur <= 0) return -1;
        prev = time;
    }
    return cur;
}
