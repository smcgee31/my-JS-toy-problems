// write a function that returns a boolean true if the number of x's and o's are equal
// in a given string. (case insensitive) and zero x's and zero o's would be true.

const str1 = [`xo`]    // true
    , str2 = [`xxOo`]  // true
    , str3 = [`xxxm`]  // false
    , str4 = [`ooom`]  // false
;

// Solution #1
exesAndOhs = (str) => {
  str = str.toLowerCase();
  let exes = 0;
  let ohs = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      exes++;
    } else if (str[i] === 'o'){
      ohs++;
    }
    answer = (exes === ohs) ? true : false;
  }
  return answer;
};


// Solution #2
exesAndOhs = (str) => {
  let x = str.match(/x/gi);  // assign x all the exes in the string
  let o = str.match(/o/gi);  // assign o all the ohs in the string
  return (x && x.length) === (o && o.length);
  // return true if it exists and the amounts are the same
};


// Solution #3 - short
XO = (str) => { return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length; }
// OR
// function XO(str) {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }
