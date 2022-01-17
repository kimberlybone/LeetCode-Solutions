/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    
    for (num of nums) {
        if (set.has(num)) return true;
        
        set.add(num);
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