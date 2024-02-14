/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

    let data = {};

    return function (...args) {
        const key = JSON.stringify(args)
        if (key in data) {
            return data[key];
        }
        const cachedRes = fn.apply(this, args)
        data[key] = cachedRes
        return cachedRes
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */