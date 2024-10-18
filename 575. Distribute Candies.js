/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const differentTypes = Array.from(new Set(candyType));
  if (differentTypes.length < candyType.length / 2) return differentTypes.length;
  else return candyType.length / 2;
};
