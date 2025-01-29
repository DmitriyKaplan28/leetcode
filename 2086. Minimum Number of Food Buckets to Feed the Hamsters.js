/**
 * @param {string} hamsters
 * @return {number}
 */
var minimumBuckets = function (hamsters) {
  const n = hamsters.length;
  let res = 0;
  let i = 0;

  while (i < n) {
    if (hamsters[i] === "H") {
      if (i > 0 && hamsters[i - 1] === "B") {
        i++;
      }
      else if (i + 1 < n && hamsters[i + 1] === ".") {
        hamsters =
          hamsters.substring(0, i + 1) + "B" + hamsters.substring(i + 2);
        res++;
        i += 2; 
      }
      else if (i > 0 && hamsters[i - 1] === ".") {
        hamsters = hamsters.substring(0, i - 1) + "B" + hamsters.substring(i);
        res++;
        i++;
      }
      else {
        return -1;
      }
    } else {
      i++;
    }
  }

  return res;
};
