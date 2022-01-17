/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
//    use constant space
//    loop and count characters 
//    when I get to the next uniqe character, splice based off of count
//     two pointer
    let count = 1; //want to use this number to count the chars. start with 1 bc 
    let start = 0; // index starts at 0. this will let us know what char we need to replace
    
    for(let i = 1; i <= chars.length; i++) {
        const prev = chars[i-1];
        const cur = chars[i]

        if (count === 1) {
            start = i;
        }

        if(cur === prev) {
            count++;
        } else if(cur !== prev && count > 1) {
            const countStr = count.toString().split("");
            
            chars.splice(start, count - 1, ...countStr)
            i = start + countStr.length;
            count = 1;
        } 
    }
    
    return chars.length;
};

// Issues with current code:
// 1. return double digit count as separate strings