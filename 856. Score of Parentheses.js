/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    const stack = [0];

    for (const ch of s) {
        if (ch === '(') {
            stack.push(0);
        } else {
            const v = stack.pop();
            const add = v === 0 ? 1 : 2 * v;
            stack[stack.length - 1] += add;
        }
    }

    return stack[0];
};

console.log(scoreOfParentheses("()"));
console.log(scoreOfParentheses("(())"));
console.log(scoreOfParentheses("()()"));