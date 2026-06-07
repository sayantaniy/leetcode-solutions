/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    //two pointer approach
    //T.C=O(n)
    //S.C=O(n)
    let negIndex=1
    let posIndex=0
    let ans = []
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            ans[posIndex]=nums[i]
            posIndex=posIndex+2
        }
        if(nums[i]<0){
            ans[negIndex]=nums[i]
            negIndex=negIndex+2
        }
    }
    return ans
};