/**
 * Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.
 * The distance between two adjacent cells is 1.
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let queue = [];
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) {
                queue.push([i, j])
            }else {
                matrix[i][j] = undefined;
            }
        }
    }
    
    while(queue.length > 0) {
        let [x, y] = queue.shift();
        let range = [[-1, 0], [1,0], [0,1], [0, -1]];
        range.forEach(([m,n]) => {
            m += x;
            n += y;
            if(m < 0 || m >= matrix.length || n < 0 || n >= matrix[0].length) return;
            if(matrix[m][n] !== undefined || matrix[m][n] < matrix[x][y] + 1) return;
            matrix[m][n] = matrix[x][y] + 1;
            queue.push([m,n])
        })
    }
    return matrix;
};