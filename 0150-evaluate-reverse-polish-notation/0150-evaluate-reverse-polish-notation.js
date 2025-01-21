/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  if (tokens.length === 1) return +tokens[0]
  let stack = []

  for (let i = 0; i < tokens.length; i++) {
    let word = tokens[i]
    if (!isNaN(word)) {
      stack.push(word)
    } else {
      let popR = stack.pop()
      let popL = stack.pop()
      switch (word) {
        case '+':
          stack.push(Number(popL) + Number(popR))
          break
        case '-':
          stack.push(Number(popL) - Number(popR))
          break
        case '*':
          stack.push(Number(popL) * Number(popR))
          break
        case '/':
          stack.push(Math.trunc(Number(popL) / Number(popR)))
          break
      }
    }
  }

  return stack.reduce((a, b) => a + b)
};