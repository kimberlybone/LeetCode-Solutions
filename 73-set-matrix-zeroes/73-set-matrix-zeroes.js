/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
//     loop to get 0s and store in data structure
//     store in set
//     1st set will be rows
//     2nd set will be columns
//     loop to change all the numbers
    
    
    let zeroInFirstRow = false;
    let zeroInFirstCol = false;
    
//     Go through first row
    for (let i = 0; i < matrix[0].length; i++) {
        zeroInFirstRow = zeroInFirstRow || matrix[0][i] === 0;
    }
//     Go through first column
    for (let i = 0; i < matrix.length; i++) {
        zeroInFirstCol = zeroInFirstCol || matrix[i][0] === 0;
    }
    
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
//     Go through first row
    for (let i = 0; i < matrix[0].length; i++) {
        if(zeroInFirstRow) {
            matrix[0][i] = 0;
        }
    }
//     Go through first column
    for (let i = 0; i < matrix.length; i++) {
        if(zeroInFirstCol) {
            matrix[i][0] = 0;
        }
    }
    
    
//     let rows = [];
//     let columns = [];
    
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] === 0) {
//                 rows[i] = true;
//                 columns[j] = true;
//             }
//         }
//     }
    
//         for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (rows[i] || columns[j]) {
//                 matrix[i][j] = 0;
//             }
//         }
//     }
};