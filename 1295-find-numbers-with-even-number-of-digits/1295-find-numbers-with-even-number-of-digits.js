/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let c = 0
    for(let n of nums){
        if(String(n).length%2===0)
        c+=1
    }
    return c
};