/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let smallest = prices[0] //smallest value seen so far
    let maxProfit = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < smallest) smallest = prices[i]
        let currPrice = prices[i]
        let profit = currPrice - smallest
        maxProfit = Math.max(maxProfit, profit)
    }
    return maxProfit
};