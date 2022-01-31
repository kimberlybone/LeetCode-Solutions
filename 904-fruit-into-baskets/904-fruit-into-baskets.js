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
    let counts = new Map();
    let max = 0;
    
    for (let end = 0; end < fruits.length; end++) {
        
        counts.set(fruits[end], counts.get(fruits[end]) + 1 || 1);
        
        while (counts.size > 2) {
            const fruit = fruits[start];
            const fruitCount = counts.get(fruit);
            
            if (fruitCount - 1 === 0) counts.delete(fruit);
            else counts.set(fruit, fruitCount - 1);
            
            start++;
        }
        
        if (counts.size >= 1) max = Math.max(max, end - start + 1);
    }
    return max;
};