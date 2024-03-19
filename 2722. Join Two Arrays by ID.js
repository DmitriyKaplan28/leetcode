/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let res = new Map();
  for (const obj of arr1) {
    res.set(obj.id, obj);
  }

  for (const obj of arr2) {
    if (res.has(obj.id)) {
      const item = res.get(obj.id);
      res.set(obj.id, { ...item, ...obj });
    } else {
      res.set(obj.id, obj);
    }
  }
  return [...res.values()].sort((left, right) => left.id - right.id);
};
