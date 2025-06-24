/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  const yearCount = new Array(2051).fill(0);
  for (const [birth, death] of logs) {
    yearCount[birth]++;
    yearCount[death]--;
  }
  let maxPop = 0,
    maxYear = 1950,
    currPop = 0;
  for (let year = 1950; year <= 2050; year++) {
    currPop += yearCount[year];
    if (currPop > maxPop) {
      maxPop = currPop;
      maxYear = year;
    }
  }
  return maxYear;
};

console.log(
  maximumPopulation([
    [1993, 1999],
    [2000, 2010],
  ])
);
console.log(
  maximumPopulation([
    [1950, 1961],
    [1960, 1971],
    [1970, 1981],
  ])
);
