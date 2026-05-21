/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function (s) {
    if (s.includes("@")) {
        const at = s.indexOf("@");
        const name = s.slice(0, at);
        const domain = s.slice(at + 1);
        return (
            name[0].toLowerCase() +
            "*****" +
            name[name.length - 1].toLowerCase() +
            "@" +
            domain.toLowerCase()
        );
    }

    const digits = s.replace(/\D/g, "");
    const last4 = digits.slice(-4);
    const countryLen = digits.length - 10;
    if (countryLen === 0) return `***-***-${last4}`;
    return `+${"*".repeat(countryLen)}-***-***-${last4}`;
};

console.log(maskPII("LeetCode@LeetCode.com"));
console.log(maskPII("1(234)567-890"));
console.log(maskPII("AB@qq.com"));