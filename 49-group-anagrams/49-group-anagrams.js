/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
//     use hashmap
//     loop 
//     if the chars match, store in array
    
    let map = new Map()
   
    for(let word of strs) {
        const sortedWord = word.split("").sort().join("")
        let anagrams = map.get(sortedWord) || [];
        anagrams.push(word);
        map.set(sortedWord, anagrams)
    }
    
    return [...map.values()];
};