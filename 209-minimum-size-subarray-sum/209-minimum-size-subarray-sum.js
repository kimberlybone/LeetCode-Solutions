/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    let left = 0;
    let sum = 0;
    let shortest = Infinity;
    
    if (nums[0] === target) return 1;
    
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        
        while (sum >= target) {
            shortest = Math.min(shortest, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    
    return shortest === Infinity ? 0 : shortest;
};