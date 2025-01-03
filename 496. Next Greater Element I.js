/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];

  const nextGreaterMap = new Map();



  for (let num of nums2) {

    while (stack.length > 0 && stack[stack.length - 1] < num) {

      nextGreaterMap.set(stack.pop(), num);

    }

    stack.push(num);

  }

  // Any remaining elements in the stack don't have a next greater element

  while (stack.length > 0) {

    nextGreaterMap.set(stack.pop(), -1);

  }



  return nums1.map(num => nextGreaterMap.get(num))
};
