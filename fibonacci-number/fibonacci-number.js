/**
 * @param {number} n
 * @return {number}
 */

// memoization is used to solve dynamic programming problems
// It stores duplicate subproblems
// We will  use a js object
// Keys will be the argument to the fxn and val will be the return val

var fib = function(n, memo = {}) {
    return calculateFib(n, memo)
};

var calculateFib = function(n, memo){
    if (n in memo) return memo[n];
    if (n === 0 || n === 1) return n;
    
    memo[n] = calculateFib(n - 1, memo) + calculateFib(n - 2, memo );

    return memo[n];
}