/*
  Given a string, return true if the string is a palindrome.
*/

function palindrome(str) {
    return str.split('').every((char, i) =>
        char === str[str.length - i - 1]
    );
}

module.exports = palindrome;

/*
function palindrome(str) {
    var reversed = str.split('').reduce((rev, char) =>
        char + rev,
        ''
    );

    return str === reversed;
}
*/