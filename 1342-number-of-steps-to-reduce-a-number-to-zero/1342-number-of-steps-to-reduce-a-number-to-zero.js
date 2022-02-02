/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
// base case => if num is 0
  if (num === 0) return 0;
    
// do something => check if even, divide by 2. check if odd, subtract 1
    
    if (num%2 === 0) {
        const steps = numberOfSteps(num/2);
        return steps + 1;
    } else if (num%2 !== 0) {
        const steps = numberOfSteps(num - 1);
        return steps + 1;
    }
    
};

// function helper (num) {
// // base case => if num is 0
//   if (num === 0) return 0;
    
// // do something => check if even, divide by 2. check if odd, subtract 1
    
//     if (num%2 === 0) {
//         const steps = helper(num/2);
//         return steps + 1;
//     } else if (num%2 !== 0) {
//         const steps = helper(num - 1);
//         return steps + 1;
//     }
    
// //     call recursive helper function
    
//     // helper(num, steps + 1);
// }

// input => integer
// output => integer (number of steps)

