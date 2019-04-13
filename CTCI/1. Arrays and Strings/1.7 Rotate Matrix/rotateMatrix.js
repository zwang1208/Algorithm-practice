/**
 * Given an image represented by an NxN matrix, 
 * where each pixel in the image is 4 bytes, 
 * write a method to rotate the image by 90 degrees. Can you do this in place?
 * 
 * @param {array} matrix 
 */


const rotateMatrix = (matrix) => {
    if(matrix.length === 0 || matrix.length !== matrix[0].length){
        return false
    }
    let n = matrix.length;

    for(let i = 0; i < Math.floor(n/2); ++i) { //i => layer
        let first = i,
            last = n - 1 - first;
        for(let j = first; j < last; ++j) {
            let offset = j - first,
                top = matrix[first][j];
            matrix[first][j] = matrix[last-offset][first]
            matrix[last-offset][first] = matrix[last][last-offset]
            matrix[last][last-offset] = matrix[j][last]
            matrix[j][last] = top     
        }
    }
    return true
}