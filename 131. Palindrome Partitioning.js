/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];

  const isPalindrome = (str, start, end) => {
    while (start < end) {
      if (str[start] !== str[end]) return false;
      start++;
      end--;
    }
    return true;
  };

  const backtrack = (start, path) => {
    if (start >= s.length) {
      result.push([...path]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s, start, end)) {
        path.push(s.substring(start, end + 1));
        backtrack(end + 1, path);
        path.pop();
      }
    }
  };

  backtrack(0, []);
  return result;
};

console.log(partition("aab"));
console.log(partition("aaa"));
