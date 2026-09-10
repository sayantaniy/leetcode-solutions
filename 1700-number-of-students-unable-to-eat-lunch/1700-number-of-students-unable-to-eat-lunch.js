/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let topS = 0
    let topQ = 0
    while (sandwiches.length > topS) {
        if (students[0] === sandwiches[topS]) {
            students.shift()
            topS += 1
            topQ = 0
        } else {
            students.push(students.shift())//
            topQ += 1
        }

        if (topQ === students.length) {
            break
        }
    }
    return students.length
};