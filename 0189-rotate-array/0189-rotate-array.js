/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let temp = [];
    let i;
    let n = nums.length
    k = k%n
    
    if (k>n){
        return -1
    }
    //storing in temporary array
    for (i=0;i<n-k;i++){
        temp[i]=nums[i]
    }
    //shifting
    for (i=n-k;i<n;i++){
        nums[i-(n-k)]= nums[i]
    }

    //putting back the temporary array into the original array
    for (i=k;i<n;i++){
        nums[i]=temp[i-k]
    }

    return nums
    
};