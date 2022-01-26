/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0;
    let end = 1;
    let count = 1;
    let sum = nums[start];
    let shortest = Infinity;
    
    if (sum === target) return count;
    
    while ((end < nums.length + 1) && (start <= end)) {
        let startChar = nums[start];
        let endChar = nums[end];
        
        if (sum >= target) {
            shortest = Math.min(shortest, count);
            sum -= nums[start];
            start++;
            count--;
        } else if (sum < target) {
            sum += nums[end];
            end++;
            count++;
        }
        
    }
    
    return shortest === Infinity ? 0 : shortest;
};