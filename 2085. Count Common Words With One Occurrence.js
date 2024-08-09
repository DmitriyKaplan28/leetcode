/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    const obj1 = makeObjCount(words1, {})
    const obj2 = makeObjCount(words2, {})

    let res = 0

    for (const [key,value] of Object.entries(obj1)) {
        if (value !== 1) continue
        if (obj2[key] && obj2[key] === 1) res++
    }
    
    return res
};

const makeObjCount = (arr, obj) => {
    for (let i =0; i< arr.length; i++) {
        if (!obj[arr[i]]) obj[arr[i]] = 1
        else obj[arr[i]]++
    }
    return obj
}