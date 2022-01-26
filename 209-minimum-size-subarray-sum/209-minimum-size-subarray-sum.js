/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0;
    let end = 1;
    let sum = nums[start];
    let shortest = Infinity;
    
    if (sum === target) return end - start;
    
    while ((end < nums.length + 1) && (start <= end)) {
        let startChar = nums[start];
        let endChar = nums[end];
        
        if (sum >= target) {
            shortest = Math.min(shortest, end - start);
            sum -= nums[start];
            start++;
        } else if (sum < target) {
            sum += nums[end];
            end++;
        }
        
    }
    
    return shortest === Infinity ? 0 : shortest;
};