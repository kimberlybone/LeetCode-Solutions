/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
//  loop and check for even nums then push them into an arr
//     Then push all other (odd) nums into arr
    
    let left = 0;
    let right = nums.length - 1;
    let temp;
    
    while (left < right) { // 2 < 1

        if ((nums[left] % 2 === 0) && (nums[right]%2 !== 0)){ // true, true
            left++;
            right--;
        } else if ( (nums[left] % 2 !== 0) && (nums[right] % 2 !== 0) ) { 
            right--;
        } else if ( (nums[left] % 2 !== 0) && (nums[right] % 2 === 0) ) {
            temp = nums[left];
            nums[left] = nums[right]; 
            nums[right] = temp;
        } else if ( (nums[left] % 2 === 0) && (nums[right] % 2 === 0) ) { 
            left++;
        }
        
    }
    return nums;
    
//     for(let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             result.push(nums[i]);
//         }
//     }
    
//     for(let j = 0; j < nums.length; j++) {
//         if (nums[j] % 2 !== 0) {
//             result.push(nums[j]);
//         }
//     }
    // return result;
};