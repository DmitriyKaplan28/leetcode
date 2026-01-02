/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    const totalApples = apple.reduce((a, b) => a + b, 0);
  capacity.sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < capacity.length; i++) {
    sum += capacity[i];
    if (sum >= totalApples) return i + 1;
  }

  return capacity.length;
};
