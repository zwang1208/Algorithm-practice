/** 
 * Implement an algorithm to determine if a string has all unique characters. 
 * What if you cannot use additional data structures?
 */

/**
 * Set data structure 
 * 
*/

const isUnique = (s) => (s === [...new Set(s)].join(''))

/**
 * sort
 */

const isUnique = (s) => {
    s.sort()

    for(let i = 1; i < s.length; ++i) {
        if(s[i] === s[i-1]) {
            return false
        }
    }

    return true
}