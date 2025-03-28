/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];

  const ranking = [...score]
    .sort((a, b) => b - a)
    .reduce((prev, current, index) => {
      prev[current] = index < 3 ? `${medals[index]}` : `${index + 1}`;
      return prev;
    }, {});

  return score.map((position, index) => ranking[position]);
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
