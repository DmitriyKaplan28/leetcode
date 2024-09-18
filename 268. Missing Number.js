/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const sorted = nums.sort((a,b) => a-b);
  for (const num of sorted) {
    if (num !== sorted.indexOf(num)) return sorted.indexOf(num);
  }
  return nums.length;
};

console.log(missingNumber([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]));
