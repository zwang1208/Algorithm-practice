/**
 * Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
 * 
 * Input: n = 12
 * Output: 3 
 * Explanation: 12 = 4 + 4 + 4.
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let map = new Map(),
        queue = [],
        sqrt = Math.floor(Math.sqrt(n)),
        res = 2;
    
    for(let i = 1; i <= sqrt; i++) {
        let num = i*i;
        map.set(num, num);
        if(n === num) return 1;
    }
    queue.push(n);
    
    while(queue.length) {
        let len = queue.length;
        for(let i = 0; i < len; i++) {
            let head = queue.shift();
            let sqrtNum = Math.floor(Math.sqrt(head));
            for(let j = 1; j <= sqrtNum; j++) {
                let val = head - j*j;
                if(map.get(val)){
                    return res;
                }
                queue.push(val);
            }
        }
        res++;
    }
};