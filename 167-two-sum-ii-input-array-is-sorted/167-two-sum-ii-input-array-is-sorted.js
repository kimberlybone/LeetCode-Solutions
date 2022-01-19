/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
//     1-indexed means first element starts at 1. so i + 1
//     sorted in ascending order
//  2-pointer technique
//     1 pointer will be on 1 element while the other pointer checks all other elements except for the one it already checked
    
    let left = 0;
    let right = numbers.length - 1;
    // let sum = numbers[left] + numbers[right];
    
    while (left < right){
        const sum = numbers[left] + numbers[right];

        if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        } else {
            return [left + 1, right + 1]
        }
    }
    // return [left + 1, right + 1];
};