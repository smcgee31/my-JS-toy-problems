// Your job is to write a function which increments a string, to create a new string. 
// If the string already ends with a number, the number should be incremented by 1. 
// If the string does not end with a number the number 1 should be appended to the new string.

// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


// Solution #1 - mine
function incrementString (str) {
  var ltrs = str.match(/[A-z]+/) || ''
  var num = str.match(/[0-9]+/) || ' '
  var len = num[0].length
  var inc = new String((+num) + 1)
  var ldZeros = '';
  while(ldZeros.length < len) { ldZeros = ldZeros + '0'; }
  var fullInc = (ldZeros + inc);
  return len+1 === inc.length
    ? ltrs + fullInc.slice(-(len+1)) 
    : ltrs + fullInc.slice(-len);
}