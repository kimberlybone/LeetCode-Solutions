/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
//     check if n is divisible by 3, then keep checking 
//     base case => if 0 return false, negative numbers should 
    let power = 0
    while (n > 1) {
        if(n % 3 === 0){
            n /= 3;
            // power += 1;
        } else {
            return false;
        }
    }
    if (n <= 0) return false;
    return true;
};