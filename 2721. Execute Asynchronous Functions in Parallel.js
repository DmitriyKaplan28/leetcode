/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let length = functions.length,
      res = Array(length);
    let resolvedPromises = 0;
    functions.forEach(async (fn, index) => {
      try {
        const resolved = await fn();
        res[index] = resolved;
        resolvedPromises++;

        if (resolvedPromises === length) resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  });
};
