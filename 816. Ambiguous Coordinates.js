/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
    const digits = s.slice(1, -1);
    const result = [];

    function buildNumbers(part) {
        const forms = [];

        if (part.length === 1 || part[0] !== "0") {
            forms.push(part);
        }

        for (let i = 1; i < part.length; i++) {
            const left = part.slice(0, i);
            const right = part.slice(i);

            if (left.length > 1 && left[0] === "0") continue;
            if (right[right.length - 1] === "0") continue;

            forms.push(left + "." + right);
        }

        return forms;
    }

    for (let i = 1; i < digits.length; i++) {
        const leftPart = digits.slice(0, i);
        const rightPart = digits.slice(i);
        const leftForms = buildNumbers(leftPart);
        const rightForms = buildNumbers(rightPart);

        for (const left of leftForms) {
            for (const right of rightForms) {
                result.push("(" + left + ", " + right + ")");
            }
        }
    }

    return result;
};