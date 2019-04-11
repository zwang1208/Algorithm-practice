/**
 * Given a string, write a function to check if it is a permutation of a palin- drome. 
 * A palindrome is a word or phrase that is the same forwards and backwards. 
 * A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.
 * 
 * @param {string[]} s 
 * @return {boolean}
 */



const isPalindrome = (s) => {
    if(!s) {
        return false
    }
    let chars = new Set()
    for(let i of s) {
        if(i !== ' '){
            if(chars.has(i)) {
                chars.delete(i)
            }else {
                chars.add(i)
            }
        }
    }
    return chars.size <= 1
}

