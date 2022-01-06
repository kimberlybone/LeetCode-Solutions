/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.positions = new Map();
    this.length = wordsDict.length - 1;
    
    for (let i = 0; i < wordsDict.length; i++) {
        const word = wordsDict[i];
        if(!this.positions.has(word)) this.positions.set(word, []);
        this.positions.get(word).push(i);
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
//     two pointer technique
//     set 2 indices at beginning and end
//     loop until 
//     check if each index is equal to either of the words
//     when not found increase start index or decrease end index
    
    let idx1 = 0
    let idx2 = 0;
    let minDistance = Infinity;
    
    const arr1 = this.positions.get(word1); //3
    const arr2 = this.positions.get(word2);//0
    
    while (idx2 < arr2.length && idx1 < arr1.length) {
        minDistance = Math.min(minDistance, Math.abs(arr2[idx2] - arr1[idx1]));
        if (arr1[idx1] <= arr2[idx2]) {
            idx1++; 
        } else {
            idx2++
        }
    }
    return minDistance;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */