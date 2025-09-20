/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  const lines = input.split("\n");
  const stack = [];
  let maxLength = 0;

  for (let line of lines) {
    const depth = (line.match(/\t/g) || []).length;
    const name = line.replace(/\t/g, "");

    while (stack.length > depth) {
      stack.pop();
    }

    const currentLength =
      stack.length === 0
        ? name.length
        : stack[stack.length - 1] + 1 + name.length;

    if (name.includes(".")) {
      maxLength = Math.max(maxLength, currentLength);
    } else {
      stack.push(currentLength);
    }
  }

  return maxLength;
};

console.log(lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"));
console.log(
  lengthLongestPath(
    "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
  )
);
console.log(lengthLongestPath("a"));
