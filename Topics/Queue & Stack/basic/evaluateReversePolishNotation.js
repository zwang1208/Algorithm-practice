/**
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 * Valid operators are +, -, *, /. Each operand may be an integer or another expression.
 * 
 * Division between two integers should truncate toward zero.
 * The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for(let token of tokens) {
        if(token === '+') {
            stack.push(stack.pop() + stack.pop())
        } else if (token === '-') {
            stack.push(-stack.pop() + stack.pop())
        } else if (token === '*') {
            stack.push(stack.pop() * stack.pop())
        } else if (token === '/') {
            stack.push(parseInt(1/stack.pop() * stack.pop()))
        } else {
            stack.push(parseInt(token))
        }
    }
    
    return stack[0]
};

