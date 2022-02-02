/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    helper(s, 0, s.length - 1)
};

var helper = function(s, first, last){
    if(first < last){
        // let temp = s[first];
        // s[first] = s[last];
        // s[last] = temp;
        
//         Destructure
        [s[first], s[last]] = [s[last], s[first]];
        
        helper(s, first + 1, last - 1);
    }
}