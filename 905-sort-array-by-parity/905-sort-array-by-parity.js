/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
//  loop and check for even nums then push them into an arr
//     Then push all other (odd) nums into arr
    
    let result = [];
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            result.push(nums[i]);
        }
    }
    
    for(let j = 0; j < nums.length; j++) {
        if (nums[j] % 2 !== 0) {
            result.push(nums[j]);
        }
    }
    return result;
};