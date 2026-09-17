/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    deck.sort((a, b) => a - b)
    n = deck.length
    let result = new Array(n).fill(0)
    let queue = [] //stores the indices
    for (let i = 0; i < n; i++) {
        queue.push(i)
    }

    for (let num of deck) {
        //popleft 1st time
        let i = queue.shift()
        result[i] = num
        if (queue.length) {
            //popleft 2nd time : add to the back
            queue.push(queue.shift())
        }

    }

    return result

};