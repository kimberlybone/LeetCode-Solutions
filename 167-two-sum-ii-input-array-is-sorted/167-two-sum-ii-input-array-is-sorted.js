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
    let sum = numbers[left] + numbers[right];
    
    while (sum !== target){
        sum = numbers[left] + numbers[right];
        
        console.log("left: ", numbers[left])
        console.log("right: ", numbers[right])
        console.log("Sum: ", sum, "\n")
        if (sum > target){
            right--;
        } else if (sum < target) {
            left++;
        }
    }
    return [left + 1, right + 1];
};