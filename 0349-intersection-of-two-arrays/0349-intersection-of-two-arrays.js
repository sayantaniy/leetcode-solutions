/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    //making a new array visited with the size of the second array and filling it with 0
    // const visited = new Array(n2).fill(0)
    let i,j
    let st = new Set()
    for (i=0;i<nums1.length;i++){
        for(j=0;j<nums2.length;j++){
            if (nums1[i]===nums2[j]){
                st.add(nums1[i])
            }
        } 
    }
    
    return [...st]
};