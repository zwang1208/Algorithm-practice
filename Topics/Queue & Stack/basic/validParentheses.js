/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * Note that an empty string is also considered valid.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const map = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
}
var isValid = function(s) {
    let stack = [];
    
    for(let i = 0; i<s.length; i++) {
        if(map[s[i]]) {
            stack.push(map[s[i]])
        } else {
            if(s[i] !== stack.pop()) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};