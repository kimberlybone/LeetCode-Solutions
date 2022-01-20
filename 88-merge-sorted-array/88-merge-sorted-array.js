/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // if (m === 0 && nums1.length < 1) return nums2;
    // if(n < 1 || nums2.length < 1) return nums1;
    
    let j = 0;
    
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[j];
        j++;
    }
    nums1.sort((a,b) => a-b);
    // console.log(nums1);
};