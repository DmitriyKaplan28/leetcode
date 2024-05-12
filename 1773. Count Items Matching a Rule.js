/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const order = { type: 0, color: 1, name: 2 };
  ruleKey = order[ruleKey];
  return items.reduce(
    (prev, curr) => (prev += curr[ruleKey] === ruleValue ? 1 : 0),
    0
  );
};
