/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let time = 0
    while (tickets[k] > 0) {

        let current = tickets.shift()
        time++
        current--

        if(current===0 && k===0) return time 

        if (current > 0) tickets.push(current)
        
        k--

        if (k < 0) {
            k = tickets.length - 1
        }

    }
    return time
};