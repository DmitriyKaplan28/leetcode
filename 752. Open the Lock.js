/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const deadendSet = new Set(deadends);
  const queue = [["0000", 0]];
  const currentNums = new Set(["0000"]);
  for (let [curr, turns] of queue) {
    if (curr === target) return turns;
    if (deadendSet.has(curr)) continue;
    for (let next of nextNums(curr)) {
      if (currentNums.has(next)) continue;
      currentNums.add(next);
      queue.push([next, turns + 1]);
    }
  }
  return -1;
};

const nextNums = (s = "0000") => {
  const res = [];

  for (let i = 0; i < s.length; i++) {
    res.push(s.slice(0, i) + ((+s[i] + 1) % 10).toString() + s.slice(i + 1));
    res.push(s.slice(0, i) + ((+s[i] + 9) % 10).toString() + s.slice(i + 1));
  }

  return res;
}
