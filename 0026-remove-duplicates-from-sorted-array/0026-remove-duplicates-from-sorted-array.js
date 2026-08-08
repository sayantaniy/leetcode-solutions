/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //Optimal solution T.c = O(n) and no extra space
    let x = 0 // keeps track of the last unique element
    let i // traverses the entire array starting from x+1
    for(i=1;i<nums.length;i++){
        if (nums[x]!==nums[i]){
            x=x+1
            nums[x]=nums[i]
        } //else do nothing
    }
    return x+1 // k = x+1 because x is the index of the last unique element and question is asking the total number of unique element
    
};