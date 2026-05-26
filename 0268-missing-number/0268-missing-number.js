/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    xor1 = 0
    xor2 = 0
    let i
    let n = nums.length

    for (i=0;i<n;i++){
        xor2 = xor2 ^ nums[i]
        xor1 = xor1 ^ (i+1)
    }
    
    return xor1 ^ xor2
    
};