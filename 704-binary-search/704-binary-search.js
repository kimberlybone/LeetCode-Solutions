/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;
    
    if (nums.length === 1 && nums[0] === target) return 0;
    while (left < right) {
        
        if (target === nums[left]){
            return left;
        } else if (target === nums[right]) {
            return right;
        } else if(target > nums[left]) {
            left++;
        } else if (target < nums[right]) {
            right--;
        }
    }
    
    return -1;
};