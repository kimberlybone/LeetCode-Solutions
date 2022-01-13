/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
//     use hashmap
//     loop 
//     if the chars match, store in array
    
    let i = 0;
    let map = {};
   
        for(let i = 0; i < strs.length; i++) {
            const word = strs[i];
            const sortedWord = word.split("").sort().join("")
            
            if(!map[sortedWord]) {
                map[sortedWord] = [word]
            } else {
                map[sortedWord].push(word)
            }
        }
    return Object.values(map)
};