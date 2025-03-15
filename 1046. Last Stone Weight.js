/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((s1, s2) => s1 - s2);

  while (stones.length > 1) {
    const newStone = stones.pop() - stones.pop();
    if (!newStone) continue;

    let i = 0;
    while (stones[i] < newStone) i += 1;
    stones.splice(i, 0, newStone);
  }

  return stones.length ? stones[0] : 0;
};

console.log(lastStoneWeight([2,7,4,1,8,1]));
console.log(lastStoneWeight([1]));
