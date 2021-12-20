/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let last = s.length - 1;

    for(let first = 0; first < last; first++){
        let temp = s[first];
        s[first] = s[last];
        s[last] = temp;
        last--;
    }
    
    // return helper(s, char, i);
};

// var helper = function(s, char, i){
    
// }