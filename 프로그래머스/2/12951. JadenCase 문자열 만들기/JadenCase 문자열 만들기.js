function solution(s) {
    return s.split(' ').map(word => {
      if (word.length === 0) return ''; // 공백 유지
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ')
}