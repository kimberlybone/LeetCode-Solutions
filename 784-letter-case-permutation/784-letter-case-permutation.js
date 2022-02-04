/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let result = [];
    
    helper(result, s, 0, "");
    return result;
};

function helper(result, s, i, path){
//     base case
    if (i === s.length) {
        result.push(path);
        return;
    }
    
//     recursive call
    if (isNaN(s[i])) {
        helper(result, s, i + 1, path + s[i].toLowerCase());
        helper(result, s, i + 1, path + s[i].toUpperCase());
    } else {
        helper(result, s, i + 1, path + s[i]);
    }
}

// input = str
// output = arr of str

