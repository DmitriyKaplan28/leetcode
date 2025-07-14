/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = [];
  let num = 0;
  let sign = "+";
  s = s.replace(/\s+/g, "");
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (!isNaN(ch)) {
      num = num * 10 + Number(ch);
    }
    if (isNaN(ch) || i === s.length - 1) {
      if (sign === "+") {
        stack.push(num);
      } else if (sign === "-") {
        stack.push(-num);
      } else if (sign === "*") {
        stack.push(stack.pop() * num);
      } else if (sign === "/") {
        let prev = stack.pop();
        let res = prev / num;
        stack.push(res < 0 ? Math.ceil(res) : Math.floor(res));
      }
      sign = ch;
      num = 0;
    }
  }
  return stack.reduce((a, b) => a + b, 0);
};

console.log(calculate("3+2*2"));
console.log(calculate(" 3/2 "));
console.log(calculate(" 3+5 / 2 "));
