/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let l=0
    let maxLen=0
    let len=0
    for(let r=0;r<s.length;r++){
        while (set.has(s[r])){
            set.delete(s[l]) //deleted elemtes until s[r] is present is s[r] is already present
            l++
        }
        set.add(s[r])
        len=r-l+1
        if (len>maxLen){
            maxLen=len
        }

    }
    return maxLen
    
};