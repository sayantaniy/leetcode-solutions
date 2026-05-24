/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i,j=-1;
    for (i=0;i<nums.length;i++){
        if (nums[i]===0){
            j=i
            break;
        }
    }

    if (j===-1){
        return nums
    }

    for (i=j+1;i<nums.length;i++){
        if (nums[i]!==0){
            [nums[i],nums[j]]=[nums[j],nums[i]] //swapping
            j++
        }
    }

    return nums
    
};