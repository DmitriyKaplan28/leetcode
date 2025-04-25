/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const parts = path.split("/").filter((part) => part !== "" && part !== ".");
  const stack = [];

  for (const part of parts) {
    if (part === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(part);
    }
  }

  return "/" + stack.join("/");
};

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/home/foo"));
console.log(simplifyPath("/home/user/Pictures"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/.../a/../b/c/../d/./"));
