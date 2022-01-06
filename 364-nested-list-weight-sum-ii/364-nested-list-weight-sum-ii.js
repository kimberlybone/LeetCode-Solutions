/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
//     weight = maxDepth - depth + 1
//     maxDepth = most nested integer
//     recursion?
//     base cases => if empty, not valid
    
    let maxDepth = 0;
    let sum = 0;
    let depthSum = 0;
    
    let traverse = (ni, depth) => {
        if (ni.isInteger()) {
            depthSum += ni.getInteger() * depth;
            sum += ni.getInteger();
            maxDepth = Math.max(maxDepth, depth)
            return;
        }
        ni.getList().forEach(i => traverse(i, depth + 1))
    }
    nestedList.forEach(i => traverse(i, 1))
    
    return (maxDepth + 1) * sum - depthSum;
    
};