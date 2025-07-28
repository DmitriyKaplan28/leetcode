/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  if (!board || board.length === 0) return 0;

  const m = board.length;
  const n = board[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "X") {
        const noXAbove = i === 0 || board[i - 1][j] !== "X";
        const noXLeft = j === 0 || board[i][j - 1] !== "X";

        if (noXAbove && noXLeft) {
          count++;
        }
      }
    }
  }

  return count;
};

console.log(countBattleships([["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]));
console.log(countBattleships([["."]]))
