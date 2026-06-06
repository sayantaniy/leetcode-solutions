/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //USING KADANE'S ALGORITHM
    let sum=0
    let maxi = Number.MIN_SAFE_INTEGER
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i]

        if (sum>maxi){
            maxi = sum
        }

        if (sum<0){
            //don't move forward with negative numbers
            sum=0
        }
    }
    return maxi
};