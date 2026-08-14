/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!==t.length) return false
    let n = s.length
    //use two maps
    const Map1 = new Map() // Map from s to t
    const Map2 = new Map() // Map from t to s
    for(let i=0;i<n;i++){
        
        if(
            (Map1.has(s[i]) && t[i]!==Map1.get(s[i])) ||
            (Map2.has(t[i]) && s[i]!==Map2.get(t[i]))
        )
        return false

        Map1.set(s[i],t[i])
        Map2.set(t[i],s[i])
    }

    return true
    
};