/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squares = [];
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            squares.push(nums[left] ** 2);
            left++;
        } else {
            squares.push(nums[right] ** 2);
            right--;
        }
    }
    
    return squares.reverse();
};