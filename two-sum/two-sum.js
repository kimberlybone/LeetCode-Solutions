/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // create empty map
    let map = new Map
    // iterate over the array 
    for(let i = 0; i < nums.length; i++){
        // find difference of target and the current element
        let dif = target - nums[i]
        // if the map has the dif value return array of dif index & current index
        if(map.has(dif)){
            return [map.get(dif), i]
        }
        // if not add the element and the index to the map
        map.set(nums[i], i)
    }
};