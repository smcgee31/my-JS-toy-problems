// Write a function that confirms that repeats a string n number of times
// example:
// repeatStringNumTimes("abc", 3) should return "abcabcabc"


// Solution #1 - mine
function repeatStringNumTimes(str, n) {
  if (n <= 0) {
    return '';
  }
  var result = '';
  while (n > 0) {
    result += str;
    n--;
  }
  return result;
}

repeatStringNumTimes("abc", 3);


// Solution #2 - mine -- for-loop instead of while
function repeatStringNumTimes2(str, n) {
  if (n <= 0) {
    return '';
  }
  var result = '';
  for (var i = n; i >0; i--) {
    result += str;
  }
  return result;
}

repeatStringNumTimes2("abc", 3);




// Solution #3 - using .repeat()
function repeatStringNumTimes(str, n) {
  return n > 0 ? str.repeat(n) : '';
}

repeatStringNumTimes("abc", 3);



// Solution #4 - using recursion
function repeatStringNumTimes3(str, n) {
  if(n < 0)
    return "";
  if(n === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, n - 1);
}

repeatStringNumTimes4("abc", 3);