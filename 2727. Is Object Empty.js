/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  return Array.isArray(obj) ? !Boolean(obj.length) : !Object.keys(obj).length;
};
