/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    const n = s.length;
    const cnt = new Array(26).fill(0);
    for (let i = 0; i < n; i++) {
        cnt[s.charCodeAt(i) - 97]++;
    }

    let maxCount = 0;
    let maxLetter = 0;
    for (let i = 0; i < 26; i++) {
        if (cnt[i] > maxCount) {
            maxCount = cnt[i];
            maxLetter = i;
        }
    }
    if (maxCount > Math.floor((n + 1) / 2)) return "";

    const ans = new Array(n);
    let idx = 0;
    while (cnt[maxLetter] > 0) {
        ans[idx] = String.fromCharCode(97 + maxLetter);
        cnt[maxLetter]--;
        idx += 2;
        if (idx >= n) idx = 1;
    }
    for (let c = 0; c < 26; c++) {
        while (cnt[c] > 0) {
            if (idx >= n) idx = 1;
            ans[idx] = String.fromCharCode(97 + c);
            cnt[c]--;
            idx += 2;
        }
    }
    return ans.join("");
};

console.log(reorganizeString("aab"));
console.log(reorganizeString("aaab"));