/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let c0=0
    let c1=0
    let c2=0
    for(let i=0;i<nums.length;i++){
        if (nums[i]===0) c0++
        else if (nums[i]===1) c1++
        else c2++
        }
    for (i=0;i<c0;i++)
    nums[i]=0
    for (i=c0;i<c1+c0;i++)
    nums[i]=1
    for (i=c0+c1;i<nums.length;i++)
    nums[i]=2

    return nums
    
};