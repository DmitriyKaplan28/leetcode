/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  const result = Array(num_people).fill(0);
  let remaining = candies;
  let round = 0;

  while (remaining > 0) {
    for (let i = 0; i < num_people && remaining > 0; i++) {
      const candiesToGive = round * num_people + i + 1;

      const actualGive = Math.min(candiesToGive, remaining);
      result[i] += actualGive;
      remaining -= actualGive;
    }
    round++;
  }

  return result;
};

console.log(distributeCandies(7,4));
console.log(distributeCandies(10,3));
