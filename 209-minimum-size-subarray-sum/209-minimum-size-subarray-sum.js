/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
//     let start = 0;
//     let end = 0;
//     let sum = nums[start];
//     let shortest = Infinity;
    
    // if (sum === target) return end - start;
    
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
        // right++;
    }
    
//     while (end < nums.length) {
        
//         if (sum >= target) {
//             shortest = Math.min(shortest, end - start + 1);
//             sum -= nums[start];
//             start++;
//         } else if (sum < target) {
//             end++;
//             sum += nums[end];
//         }
        
//     }
    
    return shortest === Infinity ? 0 : shortest;
};