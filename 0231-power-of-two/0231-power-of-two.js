/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<=0) return false 
    while((n%2) === 0){ //jab tsk divide hoga two se
       n = n/2
    }
    return (n===1) //if n is eventually 1 then reutrn true
};