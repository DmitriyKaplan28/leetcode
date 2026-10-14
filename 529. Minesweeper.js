/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  var rows = board.length;
  var columns = board[0].length;
  var row = click[0];
  var column = click[1];

  if (board[row][column] === "M") {
    board[row][column] = "X";
    return board;
  }

  var reveal = function (r, c) {
    var adjacentMines = 0;

    for (var dr = -1; dr <= 1; dr++) {
      for (var dc = -1; dc <= 1; dc++) {
        var neighborRow = r + dr;
        var neighborColumn = c + dc;

        if (
          neighborRow >= 0 &&
          neighborRow < rows &&
          neighborColumn >= 0 &&
          neighborColumn < columns &&
          board[neighborRow][neighborColumn] === "M"
        ) {
          adjacentMines++;
        }
      }
    }

    if (adjacentMines > 0) {
      board[r][c] = String(adjacentMines);
      return;
    }

    board[r][c] = "B";

    for (var dr = -1; dr <= 1; dr++) {
      for (var dc = -1; dc <= 1; dc++) {
        var neighborRow = r + dr;
        var neighborColumn = c + dc;

        if (
          neighborRow >= 0 &&
          neighborRow < rows &&
          neighborColumn >= 0 &&
          neighborColumn < columns &&
          board[neighborRow][neighborColumn] === "E"
        ) {
          reveal(neighborRow, neighborColumn);
        }
      }
    }
  };

  reveal(row, column);
  return board;
};
