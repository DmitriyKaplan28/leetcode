/**
 * @param {number[]} start
 * @param {number[]} target
 * @return {boolean}
 */
var canReach = function(start, target) {
  const dx = Math.abs(start[0] - target[0]);
  const dy = Math.abs(start[1] - target[1]);

  return (dx + dy) % 2 === 0;
};
