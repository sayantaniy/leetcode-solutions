/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set(nums)
    if (set.size === nums.length){
        return false //no duplicate
    }else{
        return true //contains duplicate
    }
    
};