/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    
    for (num of nums) {
        if (map.has(num)) return true;
        
        map.set(num, 1);
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