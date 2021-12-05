/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if(s.length === 0) return false;
    
    let seenDigit = false, seenExponent = false, seenDot = false;

    for(let i = 0; i < s.length; i++){
        let prev = s[i-1];
        let curr = s[i];
        
        if(curr >= '0' && curr <= '9'){
            seenDigit = true;
        } else if(curr === '.'){
            if(seenDot || seenExponent){
                return false;
            } 
            seenDot = true;
        } else if(curr === '-' || curr === '+'){
            if(i > 0 && prev !== 'e' && prev !== 'E'){
                return false;
            }
        } else if(curr === 'e' || curr === 'E'){
            if(seenExponent || !seenDigit){
                return false;
            } else {
                seenExponent = true;
                seenDigit = false;
            }
        } else {
            return false;
        }
    }
    return seenDigit;
};