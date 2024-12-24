/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
var sortedArrayToBST = function (nums) {
  function helper(left, right) {
    if (left > right) return null; 

    const mid = Math.floor((left + right) / 2); 
    const root = new TreeNode(nums[mid]); 

    root.left = helper(left, mid - 1);
    root.right = helper(mid + 1, right);

    return root;
  }

  return helper(0, nums.length - 1);
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));
console.log(sortedArrayToBST([1,3]));

