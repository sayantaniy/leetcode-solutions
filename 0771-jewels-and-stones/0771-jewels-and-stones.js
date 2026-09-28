/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let c = 0
    for (let c1 of jewels){
        for(let c2 of stones){
            if (c1===c2) c++
        }
    }
    return c
    
};