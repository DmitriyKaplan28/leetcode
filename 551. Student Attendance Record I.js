/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let prev = "";
  let strick = 0;
  const attendance = {};
  for (const l of s) {
    if (!attendance[l]) attendance[l] = 1;
    else attendance[l]++;

    switch (l) {
      case "L":
        if (l === prev || strick === 0) strick++;
        if (strick >= 3) return false;
        break;
      case "A":
        strick = 0;
        if (attendance[l] >= 2) return false;
        break;
      default:
        strick = 0;
        break;
    }
    prev = l;
  }
  return true;
};

console.log(checkRecord("PPALLP"));
console.log(checkRecord("PPALLL"));
