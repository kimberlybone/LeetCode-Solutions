/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
//     base cases => if 0
    let steps = 0;
    
    while (num > 0) {
        if ((num % 2) === 0) {
            num /= 2;
            steps += 1;
        } else {
            num -= 1;
            steps += 1;
        }
    }
    return steps;
    
    // return helper(num, steps);
};

// var helper = function(num, steps){
//     console.log("number: ", num)
//     console.log("total steps: ", steps)
//     if(num === 0) return steps;
    
//     if ((num % 2) === 0) {
//         num /= 2;
//         steps += 1;
//         console.log("step: ", steps)
//         helper(num, steps);
//     } else {
//         num -= 1;
//         steps += 1;
//         console.log("step: ", steps)
//         helper(num, steps);
//     }
// }