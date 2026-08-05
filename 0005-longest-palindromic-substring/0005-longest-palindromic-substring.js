/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    start=0
    let maxLen=1
    if(s.length<2) return s
    function expand(left,right){
        while(left>=0 && right<s.length && s[left]===s[right]){
            left--
            right++
        }

        let len = right - left - 1
        if (len>maxLen){
            maxLen=len
            start = left+1
        }
        
    }
    // expand around center problem LCR
    for (let i=0;i<s.length;i++){
        //for odd palindrome
        expand(i,i)
        //for even palindrome
        expand(i,i+1)
    }

    return s.substring(start,start+maxLen)
    
};