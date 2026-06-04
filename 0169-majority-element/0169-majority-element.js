/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //aplying moore's voting algo which has t.c= O(n) and s.c = O(1)
    let c=0
    let elem
    for(let i=0;i<nums.length;i++){
        if (c===0){
            c=1
            elem=nums[i]
        }
        else if (nums[i]===elem){
            c++
        }
        else
        c--
        //this c does not signify anything
    }
    return elem
    
};