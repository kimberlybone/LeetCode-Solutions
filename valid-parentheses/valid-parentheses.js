/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   
    if(s.length % 2 !== 0) return false; 
    
    const matches = {
        '{':'}',
        '[':']',
        '(':')'
    };
    
    let stack = [];
    
    for(let bracket of s){
        if(matches.hasOwnProperty(bracket)){
            stack.push(bracket);
        } else {
             if(stack.length !== 0){
                const lastOpen = stack.pop();
                if(matches[lastOpen] !== bracket) return false;
              } else {
                 return false;
              }
        }
    }
    return stack.length === 0;
};