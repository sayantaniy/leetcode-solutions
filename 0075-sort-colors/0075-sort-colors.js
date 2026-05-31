/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n = nums.length
    let low=0
    let mid=0
    let high = n-1
    while(mid<=high){
        if (nums[mid]===0){ 
        [nums[low],nums[mid]]=[nums[mid],nums[low]]
        mid++
        low++
        }
        else if (nums[mid]===1)
        mid++
        else{
        [nums[high],nums[mid]] = [nums[mid],nums[high]]
        high-- 
        }
    }
    return nums
};