/**
 * Assume you have amethod isSubstring which checks ifone word is asubstring of another. 
 * Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring 
 * (e.g.,"waterbottle"is a rotation of"erbottlewat").
 * 
 * 
 * @param {string} s1 
 * @param {string} s2 
 * @return {boolean}
 */

const isRotatedString = (s1, s2) => {
    if(s1.length !== s2.length) {
        return false
    }
    return isSubstring(s1+s1, s2)//make copy of s1, if s2 is substring of s1+s1, s2 is rotate of s1
}

const isSubstring = (str, substr) => {
    return str.includes(substr)
}