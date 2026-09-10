/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let stack = [] //array 
    let sum = 0
    for (let i = 0; i < operations.length; i++) {

        if (operations[i] === '+') {
            
                stack.push(stack[stack.length - 1] + stack[stack.length - 2])
            
        }

        else if (operations[i] == 'D') {
           
                stack.push(2 * stack[stack.length - 1])
            
        }

        else if (operations[i] == 'C') {
           
                stack.pop()
            

        }
        else {
            let x = Number(operations[i])
            stack.push(x)
        }
    }

    for (let num of stack) {
        sum += num
    }

    return sum

};