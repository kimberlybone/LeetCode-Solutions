/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0;
    let end = 0;
    let sum = nums[start];
    let shortest = Infinity;
    
    if (sum === target) return end - start;
    
    while (end < nums.length) {
        
        if (sum >= target) {
            shortest = Math.min(shortest, end - start + 1);
            sum -= nums[start];
            start++;
        } else if (sum < target) {
            end++;
            sum += nums[end];
        }
        
    }
    
    return shortest === Infinity ? 0 : shortest;
};