function solution(brown, yellow) {
  const total = brown + yellow;
  
  for (let x = 3; x <= total; x++) {
    if (total % x === 0) { 
      const y = total / x;
      if (x >= y && (x - 2) * (y - 2) === yellow) {
        return [x, y];
      }
    }
  }
}