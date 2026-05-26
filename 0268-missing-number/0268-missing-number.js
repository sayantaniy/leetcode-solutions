/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum=0, s2=0
    let n = nums.length
    let i
    sum = n*(n+1)/2
    for (i=0;i<n;i++){
        s2+=nums[i]
    }
    return sum-s2
    
};