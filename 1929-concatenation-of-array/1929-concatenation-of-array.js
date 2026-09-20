/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    nums.push(...nums) //using spread operator
    return nums    
};