/*
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const orderMap = new Map();
  arr2.forEach((num, index) => orderMap.set(num, index));

  return arr1.sort((a, b) => {
    const indexA = orderMap.has(a) ? orderMap.get(a) : arr2.length + a;
    const indexB = orderMap.has(b) ? orderMap.get(b) : arr2.length + b;
    return indexA - indexB;

  });
};
