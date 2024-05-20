var numIdenticalPairs = function (nums) {
  let pairs = new Map(),
    answer = 0;
  for (let num of nums) {
    answer += pairs.get(num) || 0;
    pairs.set(num, (pairs.get(num) || 0) + 1);
  }
  return answer;
};
