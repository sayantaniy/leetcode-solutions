/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let st1 = []
    let st2 = []
    for (let ch of s) {
        if (ch === '#') {
            st1.pop()
        }
        else {
            st1.push(ch)
        }
    }

    for (let ch of t) {
        if (ch === '#') {
            st2.pop()
        }
        else {
            st2.push(ch)
        }
    }

    const equals = (a, b) =>
        a.length === b.length && a.every((val, index) => val === b[index]);

    return equals(st1, st2)

};