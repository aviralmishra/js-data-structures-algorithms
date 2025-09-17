/*
    --- Directions
    Given a string, return a new string with the reversed order
    of characters.
    
    --- Examples
    reverse('hello') === 'olleh'
*/

function reverse(str) {
  return str.split('').reduce((reversed, char) =>
    char + reversed, // the output for next element iteration
    '' // starting argument
  )
}

module.exports = reverse;

/*
function reverse(str) {
  return str.split('').reverse().join('');
}
*/

/*
function reverse(str) {
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}
*/