/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
    
    for (num of nums) {
        if (obj[num]) {
            return true
        } else {
            obj[num] = 1;
        }
    }
    return false;
    
//     for (let i = 1; i < nums.length; i++) {
//         const cur = nums[i];
//         const prev = nums[i - 1];
    
//         if (cur === prev) {
//             return true;
//         }
//     }
//     return false;
};