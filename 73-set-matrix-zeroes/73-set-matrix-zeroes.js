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
    
    let rows = new Set();
    let columns = new Set()
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                columns.add(j);
            }
        }
    }
    
        for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (rows.has(i) || columns.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};