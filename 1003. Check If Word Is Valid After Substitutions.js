/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];

    for (const ch of s) {
        stack.push(ch);

        const n = stack.length;
        if (
            n >= 3 &&
            stack[n - 3] === 'a' &&
            stack[n - 2] === 'b' &&
            stack[n - 1] === 'c'
        ) {
            stack.pop();
            stack.pop();
            stack.pop();
        }
    }

    return stack.length === 0;
};