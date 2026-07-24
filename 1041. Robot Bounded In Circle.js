/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  let dir = 0;
  let x = 0,
    y = 0;

  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (const ch of instructions) {
    if (ch === "G") {
      x += moves[dir][0];
      y += moves[dir][1];
    } else if (ch === "L") {
      dir = (dir + 3) % 4;
    } else {
      // 'R'
      dir = (dir + 1) % 4;
    }
  }

  return (x === 0 && y === 0) || dir !== 0;
};

console.log(isRobotBounded("GGLLGG"));
console.log(isRobotBounded("GG"));
console.log(isRobotBounded("GL"));
