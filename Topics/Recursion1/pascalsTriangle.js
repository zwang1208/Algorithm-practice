/**
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return [];
    
    return(function helper(i){
        if(i === 1) return [[1]];
        
        let prev = helper(i-1);
        let prevRow = prev[prev.length - 1];
        let row = [];
        
        for(let j = 0; j < i; j++) {
            if(j === 0) {
                row.push(1);
                continue;
            }
            let prevLeft = prevRow[j-1] || 1;
            let prevRight = prevRow[j] || 0;
            row.push(prevLeft+prevRight);
        }
        
        return [...prev, row]
        
    })(numRows)
    
};