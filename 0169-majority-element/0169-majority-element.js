/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let mp = new Map()
    //O(nlogn)
        for(let i=0;i<nums.length;i++){
            mp.set(nums[i], (mp.get(nums[i]) || 0) + 1)
        }
        //O(n) max
        for (let [key,val] of mp)
        if (val>nums.length/2){
            return key
        }
};