/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    let sum = 0;
    return calculateFib(n)
    
};

var calculateFib = function(n){
    if (n === 0 || n === 1) {
        return n;
    }
    
    sum = calculateFib(n - 1) + calculateFib(n - 2)
    return sum;
}