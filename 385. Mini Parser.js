/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
    // If serialization is just a single integer, return it directly.
    if (s[0] !== '[') {
        const single = new NestedInteger();
        single.setInteger(Number(s));
        return single;
    }

    const stack = [];
    let numStart = -1;

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch === '[') {
            stack.push(new NestedInteger());
        } else if (ch === '-' || (ch >= '0' && ch <= '9')) {
            if (numStart === -1) {
                numStart = i;
            }
        } else {
            if (numStart !== -1) {
                const value = Number(s.slice(numStart, i));
                const node = new NestedInteger();
                node.setInteger(value);
                stack[stack.length - 1].add(node);
                numStart = -1;
            }

            if (ch === ']' && stack.length > 1) {
                const completed = stack.pop();
                stack[stack.length - 1].add(completed);
            }
        }
    }

    return stack[0];
};