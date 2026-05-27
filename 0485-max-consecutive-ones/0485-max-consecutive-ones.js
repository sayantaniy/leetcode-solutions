/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxi = 0
    let count = 0
    let i
    for(i=0;i<nums.length;i++){
        if (nums[i]==1){
            count++
            maxi = Math.max(count,maxi)
        }
        else
        count=0
    }
    return maxi
    
};