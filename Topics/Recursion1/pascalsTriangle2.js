/**
 * Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
 * Note that the row index starts from 0.
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    
    return(function helper(i){
        if(i === 0) return [1];
        
        let prev = helper(i-1);
        let prevRow = prev[prev.length - 1];
        let row = [];
        
        for(let j = 0; j <= i; j++) {
            if(j === 0) {
                row.push(1)
                continue;
            }
            let prevLeft = prev[j-1] || 1;
            let prevRight = prev[j] || 0;
            row.push(prevLeft + prevRight);
        }
        return row;
    })(rowIndex)
};