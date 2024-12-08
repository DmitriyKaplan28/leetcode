/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const nodes = preorder.split(",");
  let slots = 1;
  for (const node of nodes) {
    slots--;
    if (slots < 0) return false;
    if (node !== "#") slots += 2;
  }
  return slots === 0;
};

console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#")); // true
console.log(isValidSerialization("1,#")); // false
console.log(isValidSerialization("9,#,#,1")); // false
