/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st = [] //arrays in JavaScript are dynamic 
    for (let i=0;i<s.length;i++){
        //if = opening bracket
        if (s[i]==='(' || s[i]==='{' || s[i]==='['){
            st.push(s[i])
        }
        else {
            //else = closing bracket
            if (st.length === 0) return false //closing bracket that has nothing to match with

            let top = st[st.length -1]

            if (s[i]==='}' && top!=='{' 
            || s[i]===')' && top!=='('
            || s[i]===']'&& top!=='['){
                return false
            }
            top = st.pop()
            
        }
    }

return (st.length === 0)
    
};