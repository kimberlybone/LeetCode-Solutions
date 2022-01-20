/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
//     go on the outside then go on the inside
    // let temp, top, right, bottom, left;
    
    
    for (let i = 0; i < matrix.length/2; i++){
        for (let j = i; j < matrix.length - 1 - i; j++) {
            let top = matrix[i][j];
            let right = matrix[j][matrix.length - 1 - i];
            let bottom = matrix[matrix.length - 1 - i][matrix.length - 1 - j];
            let left = matrix[matrix.length - 1 - j][i];
              
            matrix[i][j] = left;
            matrix[j][matrix.length - 1 - i] = top;
            matrix[matrix.length - 1 - i][matrix.length - 1 - j] = right;
            matrix[matrix.length - 1 - j][i] = bottom;
        }
    }
};