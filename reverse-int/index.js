/*
    --- Directions
    Given an integer, return a new integer with the reversed order
    of characters.
    
    --- Examples
    reverseInt(15) === 51
    reverseInt(-90) === -9
*/

function reverseInt(n) {
  const reversed = n.toString().split('').reduce((rev, char) =>
    char + rev,
    ''
  );

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
