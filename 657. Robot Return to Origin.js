/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0,
    y = 0;
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      case "R":
        x++;
        break;
      case "L":
        x--;
        break;
      default:
        break;
    }
  }
  return x === 0 && y === 0;
};

console.log(judgeCircle("UD"));
