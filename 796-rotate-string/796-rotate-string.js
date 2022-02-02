/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
//     brute force
    for (let i = 0; i < s.length; i++) {
        if (s === goal) {
            return true;
        }
        let str = s.split("")
        str.pop()

        s = s[s.length - 1] +  str.join("")// get the last character and add to the beginning of the string - last char
    }
    return false;
};