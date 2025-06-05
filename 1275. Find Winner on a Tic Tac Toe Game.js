/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  const n = 3;
  const rows = Array(n).fill(0);
  const cols = Array(n).fill(0);
  let diag = 0, antiDiag = 0;

  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i];
    const player = i % 2 === 0 ? 1 : -1;

    rows[row] += player;
    cols[col] += player;
    if (row === col) diag += player;
    if (row + col === n - 1) antiDiag += player;

    if (
      Math.abs(rows[row]) === n ||
      Math.abs(cols[col]) === n ||
      Math.abs(diag) === n ||
      Math.abs(antiDiag) === n
    ) {
      return player === 1 ? "A" : "B";
    }
  }

  return moves.length === n * n ? "Draw" : "Pending";
};
