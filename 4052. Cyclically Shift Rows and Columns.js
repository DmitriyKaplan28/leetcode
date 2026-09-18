/**
 * @param {number} n
 * @param {number[][]} grid
 * @param {number[]} rowShift
 * @param {number[]} colShift
 * @return {number[][]}
 */
var cyclicShift = function (n, grid, rowShift, colShift) {
  const shiftedRows = Array.from({ length: n }, (_, row) =>
    Array.from({ length: n }, (_, col) => grid[row][(col + rowShift[row]) % n]),
  );

  return Array.from({ length: n }, (_, row) =>
    Array.from(
      { length: n },
      (_, col) => shiftedRows[(row + colShift[col]) % n][col],
    ),
  );
};
