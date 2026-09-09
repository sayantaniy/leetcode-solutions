/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    for (let i=0;i<word.length;i++){
        if (word[i]===ch){
            let prefix = word.slice(0,i+1)
            let postfix = word.slice(i+1)
            prefix = prefix.split('').reverse().join('')
            word = prefix.concat(postfix)
            break 
        }
    }
    return word  
};