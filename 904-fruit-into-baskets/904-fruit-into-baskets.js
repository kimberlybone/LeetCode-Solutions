/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
//     sort
//     continue increasing right pointer 
//     add to obj if it doesn't exist
//     if count size exceeds 2, take out beginning of the obj since it is already in order
//     also 
    
    let start = 0;
    let counts = {};
    let max = 0;
    
    for (let end = 0; end < fruits.length; end++) {
        
        counts[fruits[end]] = counts[fruits[end]] + 1 || 1
        
        while (Object.keys(counts).length > 2) {
            const fruitCount = counts[fruits[start]];
            const fruit = fruits[start];
            
            if (fruitCount - 1 === 0) delete counts[fruit];
            else counts[fruit] = fruitCount - 1;
            
            start++;
        }
        
        if (Object.keys(counts).length >= 1) max = Math.max(max, end - start + 1);
    }
    return max;
};