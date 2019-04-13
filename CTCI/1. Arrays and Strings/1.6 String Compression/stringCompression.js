/**
 * String Compression: Implement a method to perform basic string compression using the counts of repeated characters. 
 * For example, the string aabcccccaaa would become a2b1c5a3. 
 * If the "compressed" string would not become smaller than the original string, your method should return the original string. 
 * You can assume the string has only uppercase and lowercase letters (a - z).
 * 
 * @param {string[]} s 
 */

const stringCompression = (s) => {
    if(!s) {
        return s
    }
    let str = '';

    for(let i = 0; i < s.length; ++i) {
        let char = s[i],
            start = i;
        
        while(i+1 < s.length && char === s[i+1]) {
            ++i
        }
        str += char+(i - start + 1)
    }
    return str.length < s.length ? str : s
}

console.log(stringCompression('aabcccccccccccc'))