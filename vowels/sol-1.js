/* 
    --- Directions
    Write a function that returns the number of vowels used 
    in a string.

    --- Examples
    vowels('Hi There!') --> 3
    vowels('Why do you ask?') --> 4
    vowels('Why?') --> 0
 */

function vowels(str) {
    let count = 0;
    let vowels = 'aeiou';

    for (ch of str.toLowerCase()) {
        count = (vowels.indexOf(ch) > -1) ? count + 1 : count;
    }

    return count;
}

module.exports = vowels;
