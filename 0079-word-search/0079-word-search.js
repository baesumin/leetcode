/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length
  let n = board[0].length
  let dx = [1, -1, 0, 0]
  let dy = [0, 0, 1, -1]

  let dfs = (x, y, currentIndex) => {
    if (currentIndex === word.length) return true

    let temp = board[x][y]
    board[x][y] = '#'
    for (let i = 0; i < 4; i++) {
      let nx = dx[i] + x
      let ny = dy[i] + y
      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        if (board[nx][ny] === word[currentIndex] ) {
          if (dfs(nx, ny, currentIndex + 1)) return true
        }
      }
    }
    board[x][y] = temp
    return false;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (word[0] === board[i][j] && dfs(i, j, 1)) return true
    }
  }

  return false
};