/* 
    --- Directions
    Check to see if two provided strings are anagrams of each other.
    
    One string is an anagram of another if it uses the same characters
    in the same quantity. Only consider characters, not spaces or punctuation.  
    Consider capital letters to be the same as lower case.

    --- Examples
    anagrams('rail safety', 'fairy tales') --> True
    anagrams('RAIL! SAFETY!', 'fairy tales') --> True
    anagrams('Hi there', 'Bye there') --> False
 */

function anagrams(stringA, stringB) {
    let mapA = getCharCountMap(stringA.replace(/[^\w]/g, '').toLowerCase());
    let mapB = getCharCountMap(stringB.replace(/[^\w]/g, '').toLowerCase());

    if (Object.keys(mapA).length !== Object.keys(mapB).length) {
        return false;
    }

    for (let char in mapA) {
        if (mapA[char] !== mapB[char]) {
            return false;
        }
    }

    return true;
}

function getCharCountMap(str) {
    const charCountMap = {};

    for (let ch of str) {
        if (!charCountMap[ch]) {
            charCountMap[ch] = 1;
        } else {
            charCountMap[ch]++;
        }
    }

    return charCountMap;
}

module.exports = anagrams;
