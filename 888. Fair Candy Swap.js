/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const sumAlice = aliceSizes.reduce((acc, val) => acc + val, 0);
  const sumBob = bobSizes.reduce((acc, val) => acc + val, 0);

  const delta = (sumAlice - sumBob) / 2;

  const bobSet = new Set(bobSizes);

  for (const a of aliceSizes) {
    const b = a - delta;
    if (bobSet.has(b)) {
      return [a, b]; 
    }
  }

  return [];
};


console.log(fairCandySwap([1,1], [2,2]))
console.log(fairCandySwap([1,2], [2,3]))
console.log(fairCandySwap([2], [1,3]))
