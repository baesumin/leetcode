/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let m = board.length
  let n = board[0].length
  let dx = [1, -1, 0, 0]
  let dy = [0, 0, 1, -1]

  let dfs = (x, y) => {
    console.log(x, y)
    board[x][y] = '#'

    for (let i = 0; i < 4; i++) {
      let nx = dx[i] + x
      let ny = dy[i] + y

      if (nx >= 0 && nx < m && ny >= 0 && ny < n && board[nx][ny] === 'O') {
        dfs(nx, ny)
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((i === 0 || i === m - 1) || (j === 0 || j === n - 1)) {
        if (board[i][j] === 'O') {
          dfs(i, j)
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '#') board[i][j] = 'O'
      else board[i][j] = 'X'
    }
  }
};