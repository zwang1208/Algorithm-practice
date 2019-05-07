/**
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix, result = []) {
    if(matrix.length <= 0) return result;
    
    for(let i = 0; i < matrix.length; i++) {
        let current = matrix[i];
        if(i === 0) {
            result = [...result, ...current]
        }else {
            let last = current.pop();
            if(!last) return result;
            result.push(last);
            current.reverse();
        }
    }
    matrix.shift();
    return spiralOrder(matrix.reverse(), result) //recursive
};