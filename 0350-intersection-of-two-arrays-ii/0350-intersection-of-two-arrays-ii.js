/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let visited = new Array(nums2.length).fill(0)
    let i, j;
    let ans = []
    for (i=0;i<nums1.length;i++){
        for(j=0;j<nums2.length;j++){
            if((nums1[i]===nums2[j]) && visited[j]===0){
                ans.push(nums1[i])
                visited[j]++
                break
            }
        }
    }
    return ans
};