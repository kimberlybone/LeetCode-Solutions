/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
//     base cases => if flowerbed is empty return false
//     edge cases => 
//     2 pointer technique
    
//     set var for zero count
//     set var to keep track of open spot
//     set 2 indices at a start and ending point
//     Loop
//     if start & end pointers are 0, flowers planted increments
//     if not, increment both start and end pointers
//     return false
    // if (flowerbed.length === 0) return false;
    
    for (let i = 0; i < flowerbed.length && n !== 0; i++) {
        // if (i === 0)
        
        if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            n--;
            i++;
        }
    }
    return n === 0;
    
  //     for (let i = 0; i < flowerbed.length && n !== 0; i++) {
  //   if (
  //     flowerbed[i] === 0 &&
  //     flowerbed[i - 1] !== 1 &&
  //     flowerbed[i + 1] !== 1
  //   ) {
  //     n--;
  //     i++;
  //   }
  // }
  // return n === 0;
};