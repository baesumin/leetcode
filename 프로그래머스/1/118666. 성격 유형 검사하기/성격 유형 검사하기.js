function solution(survey, choices) {
  const weights = [3, 2, 1, 0, 1, 2, 3];
  const score = { R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0 };

  for (let i = 0; i < survey.length; i++) {
    const [left, right] = survey[i];
    const c = choices[i];
    if (c < 4) score[left]  += weights[c - 1];
    else if (c > 4) score[right] += weights[c - 1];
  }

  const pick = (a, b) => (score[a] >= score[b] ? a : b);
  return (
    pick('R', 'T') +
    pick('C', 'F') +
    pick('J', 'M') +
    pick('A', 'N')
  );
}
