/**
 * Given two strings, write a method to decide if one is a permutation of the other.
 */

const isPermutation = (str1, str2) => {
    if(str1.length === 0 || str1.length !== str2.length) {
        return false
    }

    let hash = {}

    for(let i of str1) {
        if(hash.hasOwnProperty(i)) {
            hash[i] += 1
        }else {
            hash[i] = 1
        }
    }

    for(let j of str2) {
        if(!hash.hasOwnProperty(j)) {
            return false
        }
        if(hash[j] === 1) {
            delete hash[j]
        }else {
            hash[j] -= 1
        }
    }

    return Object.keys(hash).length === 0
}

console.log(isPermutation('1122334455667788', '9911223344556677'))