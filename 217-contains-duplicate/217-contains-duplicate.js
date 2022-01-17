/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a - b);
    
    for (let i = 1; i < nums.length; i++) {
        const cur = nums[i];
        const prev = nums[i - 1];
    
        if (cur === prev) {
            return true;
        }
    }
    return false;
};