/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let results = [];
    let i = 0;
    helper(results, 0, [], nums);
    return results;
};

function helper(results, i, path, input) {
//     base case 
    if (i === input.length) {
        results.push([...path]);
        return;
    }
    
//     recursive calls
//     exclude
    helper(results, i + 1, path, input);
    
//     include
    path.push(input[i]);
    helper(results, i + 1, path, input);
    
//     start backtracking
    path.pop();
    
}