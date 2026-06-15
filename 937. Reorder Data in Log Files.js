/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
    const letters = [];
    const digits = [];

    for (const log of logs) {
        const idx = log.indexOf(' ');
        const rest = log.slice(idx + 1);

        if (/\d/.test(rest[0])) {
            digits.push(log);
        } else {
            letters.push(log);
        }
    }

    letters.sort((a, b) => {
        const i1 = a.indexOf(' ');
        const i2 = b.indexOf(' ');

        const id1 = a.slice(0, i1);
        const id2 = b.slice(0, i2);

        const c1 = a.slice(i1 + 1);
        const c2 = b.slice(i2 + 1);

        if (c1 === c2) {
            return id1.localeCompare(id2);
        }

        return c1.localeCompare(c2);
    });

    return [...letters, ...digits];
};

console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]));
console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]));