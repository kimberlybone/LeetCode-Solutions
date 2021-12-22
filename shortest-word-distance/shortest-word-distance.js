/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
//     Will the characters all be lowercase?
    
//     set indices for both words
//     Loop through array
//          If array has word, record index
//          compare current result to absolute difference of the 2 indices
//          replace result if absolute difference is less           
    
    let shortestDistance = Infinity;
    let idxWord1 = 0;
    let idxWord2 = 0;
    let foundWord1 = false;
    let foundWord2 = false;
    
    for (let i = 0; i < wordsDict.length; i++) {
        console.log("current word: ", wordsDict[i])
        if (word1 === wordsDict[i]) {
            foundWord1 = true;
            idxWord1 = i;
        } else if (word2 === wordsDict[i]) {
            foundWord2 = true;
            idxWord2 = i;
        }
        if(foundWord1 && foundWord2){
            if (shortestDistance > Math.abs(idxWord1 - idxWord2)) {
                shortestDistance = Math.abs(idxWord1 - idxWord2);
            }
        }
    }
    return shortestDistance;
    
};