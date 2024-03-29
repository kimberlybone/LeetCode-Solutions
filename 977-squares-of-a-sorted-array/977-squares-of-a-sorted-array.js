/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squares = [];
    let left = 0;
    let right = nums.length - 1;

    for (let i = right; i >= 0; i--) {
        
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            squares[i] = nums[left] ** 2;
            left++;
        } else {
            squares[i] = nums[right] ** 2;
            right--;
        }
    }
    
    return squares;
};