/**
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * Note: Given n will be a positive integer.
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n===1) return 1;
    
    let a = 1,
        b = 2;
    
    for(let i = 2; i < n; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b 
};