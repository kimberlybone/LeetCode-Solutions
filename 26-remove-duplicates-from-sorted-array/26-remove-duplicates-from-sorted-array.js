/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0;
    let right = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[left] !== nums[right]) {
            nums[left + 1] = nums[right];
            left++;
        }
        right++;
    }
    return left + 1;
};