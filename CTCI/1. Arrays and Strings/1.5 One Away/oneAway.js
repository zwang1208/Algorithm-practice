/**
 * One Away: There are three types of edits that can be performed on strings: 
 * insert a character, remove a character, or replace a character. 
 * Given two strings, write a function to check if they are one edit (or zero edits) away.
 * 
 * @param {string[]} s1 
 * @param {string[]} s2 
 */


const isOneAway = (s1, s2) => {
    if(Math.abs(s1.length - s2.length)>1) {
        return false
    }
    let count = 0
        i = 0
        j = 0

    while(i<s1.length && j< s2.length) {
        if(s1[i] !== s2[j]) {
            if(count === 1) {
                return false
            }
            if(s1.length > s2.length) {
                i += 1
            }else if(s1.length < s2.length) {
                j += 1
            }else {
                i += 1
                j += 1
            }
            count += 1
        }else {
            i += 1
            j += 1
        }
    }

    if(i < s1.length || j< s2.length) {
        count += 1
    }

    return count === 1
}

let s1 = "gkf"
let s2 = "gf"
if (isOneAway(s1, s2)){
    console.log('yes')

}else{
    console.log('no')
}