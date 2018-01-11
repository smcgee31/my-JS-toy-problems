// Ten ways to reverse a string

// method #1
// use built-in methods in a chain (if you think this is fast... not really)
const revString1 = (str) => str.split('').reverse().join('');

// method #2
// use reduce() - say what?
const revString2 = (str) => {
  return str.split('').reduce((prv, cur, i, arr) => prv + arr[arr.length - i - 1],'');
};

// method #3
// use a decrementing for loop -- THIS SEEMS TO BE THE MOST PERFORMANT METHOD
const revString3 = (str) => {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

// method #4
// this is really the same as above but uses only the for-loop's parameters to decrement through the str and concatenate to the newStr
// quite cryptic but also possibly more performant than #3?
const revString4 = (str) => {
  for (var i = str.length - 1, newStr = ''; i >= 0; newStr += str[i--]) {}
  return newStr;
};

// method #5
// incrementing/decrementing for-loop with two arrays
const revString5 = (str) => {
  let newStr = [];
  for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
    newStr[j] = str[i];
  }
  return newStr.join('');
};

// method #6
// incrementing for-loop with array pushing and charAt
const revString6 = (str) => {
  let newStr = [];
  for (let i = 0; i <= str.length; i++) {
    newStr.push(str.charAt(str.length - i));
  }
  return newStr.join('');
};


// method #7
// decrementing while-loop with concatenation and substring
const revString7 = (str) => {
  let newStr = '';
  let i = str.length;
  while (i > 0) {
    newStr += str.substring(i - 1, i);
    i--;
  }
  return newStr;
};

// method #8
// use recursion
const revString8 = (str) => {
  if (str === '') {return '';}
  else {return revString8(str.substr(1)) + str.charAt(0);}
};

// method #8a
// same as above but using a conditional operator (ternary)
const revString8a = (str) => {
  return (str === '') ? '' : revString8a(str.substr(1)) + str.charAt(0);
};

// method #9
// use internal function recursion
const revString9 = (str) => {
  function rev(str, len, newStr) {
    return (len === 0) ? newStr : rev(str, --len, (newStr += str[len]));
  }
  return rev(str, str.length, '');
};

// method #10 -- The coolest of them ALL!!!
// Half-index switch for-loop
const revString10 = (str) => {
  str = str.split('');
  let len = str.length
    , halfIndex = Math.floor(len / 2) - 1
    , tmp;
  for (let i = 0; i <= halfIndex; i++) {
    tmp = str[len - i - 1];
    str[len - i - 1] = str[i];
    str[i] = tmp;
  }
  return str.join('');
};
