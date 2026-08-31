/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
    let critArr = [] //array saving the node number of the CP
    let curr = head
    let dummy = new ListNode(0, head)
    let prev = dummy
    let position = 1
    while (curr && curr.next) {
        if (prev !== dummy && curr.val > curr.next.val && curr.val > prev.val) {
            critArr.push(position)
        }
        if (prev !== dummy && curr.val < curr.next.val && curr.val < prev.val) {
            critArr.push(position)
        }
        prev = curr
        curr = curr.next
        position += 1
    }
    critArr.sort((a, b) => a - b)
    if (critArr.length < 2) return [-1, -1]
    let maxD = critArr[critArr.length - 1] - critArr[0]
    let minD = Infinity
    for (let i = 1; i < critArr.length; i++) {
        let difference = critArr[i] - critArr[i - 1]
        if (difference < minD) {
            minD = difference
        }
    }
    return [minD, maxD]
};