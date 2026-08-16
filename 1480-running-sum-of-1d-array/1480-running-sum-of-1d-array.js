/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let prefixSum = 0
    let result = []
    for (let i = 0; i < nums.length; i++) {

        for (let j = 0; j <= i; j++) {
            prefixSum = prefixSum + nums[j]
        }
        result[i] = prefixSum
        prefixSum = 0
    }
    return result
};