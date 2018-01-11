// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a 
// shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted 
// by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// NOTE: THIS SOLUTION SET IS ONLY FOR UPPERCASE LETTERS - DOES NOT WORK FOR LOWER CASE LETTERS


// Solution #1 - mine
function rot13(str) { 
  var arr = str.split('');
  var turned = [];
  arr.map(function (val) {
    if ( val.charCodeAt(0) < 65 || val.charCodeAt(0) > 90 ) {
      turned.push( String.fromCharCode(val.charCodeAt(0)) );
    } else if ( val.charCodeAt(0) > 77 ) {
      turned.push( String.fromCharCode(val.charCodeAt(0) - 13) );
    } else {
      turned.push( String.fromCharCode(val.charCodeAt(0) + 13) );
    }
  });
  return turned.join('');
}
rot13("SERR PBQR PNZC");


// Solution #2 - using ES6, regEx, and some cool math
function rot13(str) { 
  return str.replace(/[A-Z]/g, (L) => String.fromCharCode(65 + (L.charCodeAt(0) - 65 + 13) % 26));
}


// Solution #3 - mine - SOLVES FOR UPPER, LOWER, AND OTHER CHARACTERS
// like "10 + 2 is twelve"  >>  "10 + 2 vf gjryir"
function rot13(str) { 
  var arr = str.split('');
  var turned = [];
  arr.map(function (val) {
    if ( val.charCodeAt(0) > 77 && val.charCodeAt(0) < 91 ) {
      turned.push( String.fromCharCode(val.charCodeAt(0) - 13) );
    } else if ( val.charCodeAt(0) < 78 && val.charCodeAt(0) > 64 ) {
      turned.push( String.fromCharCode(val.charCodeAt(0) + 13) );
    } else if ( val.charCodeAt(0) > 109 && val.charCodeAt(0) < 123 ) {
      turned.push( String.fromCharCode(val.charCodeAt(0) - 13) );
    } else if ( val.charCodeAt(0) < 110 && val.charCodeAt(0) > 96 ) {
      turned.push( String.fromCharCode(val.charCodeAt(0) + 13) );
    } else { turned.push(val); }
  });
  return turned.join('');
}