/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    let result = [];
    let p2 = nums.length - 1;
    
    if (nums.length < 3) return result;
    
    nums.sort((a,b) => a - b);
    
    for(let i = 0; i < nums.length; i++) {
        let p1 = i + 1;
        let p2 = nums.length - 1;
        
        if (nums[i] !== nums[i - 1]) {
            
            while (p1 < p2) {
                const sum = nums[p1] + nums[p2] + nums[i];

                if (sum === 0 && ((nums[p1] !== nums[p1 -1]) || (nums[p2] !== nums[p2 + 1]))) {
                    result.push([ nums[i], nums[p1], nums[p2] ]);
                    while (nums[p1] === nums[p1 + 1]) p1++;
                    while(nums[p2] === nums[p2 - 1]) p2--;
                    p1++;
                    p2--;
                } else if (sum < 0)  p1++;
                else  p2--;
            }
        }
    }
    return result;
};