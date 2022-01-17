/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
    
    for (num of nums) {
        !obj[num] ? obj[num] = 1 : obj[num] += 1;
    }
    
    const numCounts = Object.values(obj)
    if (Math.max(...numCounts) > 1) {
        return true;
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