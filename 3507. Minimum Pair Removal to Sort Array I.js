/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
    const arr = nums.slice();
    let operations = 0;

    const isNonDecreasing = () => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) return false;
        }
        return true;
    };

    while (!isNonDecreasing()) {
        let bestIndex = 0;
        let bestSum = arr[0] + arr[1];

        for (let i = 1; i < arr.length - 1; i++) {
            const sum = arr[i] + arr[i + 1];
            if (sum < bestSum) {
                bestSum = sum;
                bestIndex = i;
            }
        }

        arr.splice(bestIndex, 2, bestSum);
        operations++;
    }

    return operations;
};

console.log(minimumPairRemoval([5, 2, 3, 1]));
console.log(minimumPairRemoval([1, 2, 2]));