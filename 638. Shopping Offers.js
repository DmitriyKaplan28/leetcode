/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    const memo = new Map();

    const dfs = (needs) => {
        const key = needs.join(',');

        if (memo.has(key)) {
            return memo.get(key);
        }

        let minCost = needs.reduce((sum, count, i) => {
            return sum + count * price[i];
        }, 0);

        for (const offer of special) {
            const nextNeeds = [...needs];
            let valid = true;

            for (let i = 0; i < needs.length; i++) {
                nextNeeds[i] -= offer[i];

                if (nextNeeds[i] < 0) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                minCost = Math.min(
                    minCost,
                    offer[needs.length] + dfs(nextNeeds)
                );
            }
        }

        memo.set(key, minCost);
        return minCost;
    };

    return dfs(needs);
    
};
