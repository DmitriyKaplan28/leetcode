/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
  let row = 0;
  let column = 0;
  let path = "";

  for (const character of target) {
    const index = character.charCodeAt(0) - 97;
    const targetRow = Math.floor(index / 5);
    const targetColumn = index % 5;

    if (character === "z") {
      while (column > targetColumn) {
        path += "L";
        column--;
      }
      while (row < targetRow) {
        path += "D";
        row++;
      }
    } else {
      while (row > targetRow) {
        path += "U";
        row--;
      }
      while (column > targetColumn) {
        path += "L";
        column--;
      }
      while (row < targetRow) {
        path += "D";
        row++;
      }
    }

    while (column < targetColumn) {
      path += "R";
      column++;
    }
    path += "!";
  }

  return path;
};
