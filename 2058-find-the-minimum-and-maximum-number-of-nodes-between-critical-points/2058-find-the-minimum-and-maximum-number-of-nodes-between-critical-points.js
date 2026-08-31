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
    //TC : O(n) SC: O(1)

    if (!head.next.next) return [-1, -1]

    let prev = head
    let curr = head.next //current starts from position 2, can never be head

    let position = 2
    let firstCP = -1
    let prevCP = -1
    let minD = Infinity
    let maxD = -1

    while (curr && curr.next) {

        if ((curr.val > curr.next.val && curr.val > prev.val) || (curr.val < curr.next.val && curr.val < prev.val)) {

            if (firstCP === -1) {
                firstCP = position
            } else {
                maxD = Math.max(maxD, position - firstCP)
                minD = Math.min(minD, position - prevCP)
            }
            prevCP = position
        }
        prev = curr
        curr = curr.next
        position += 1
    }
    if(firstCP===prevCP) return [-1,-1]
    return [minD, maxD]
};