/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []
    for (let char of s){
        if (char === stack[stack.length-1]){
            //pop
            stack.pop()
        }
        else
        stack.push(char)
    }

    return stack.join('')
};