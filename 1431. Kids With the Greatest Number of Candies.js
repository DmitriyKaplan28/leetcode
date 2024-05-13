/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  const max = Math.max(...candies);
  candies.forEach((candy) => {
    result.push(candy + extraCandies >= max);
  });

  return result;
};
