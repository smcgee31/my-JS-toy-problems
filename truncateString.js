// Write a function that returns a truncated string with tree dots added
// but the three dots should be included in the number of returned characters
// that are given in the parameters.
// However, if the given maximum string length num is less than or equal to 3,
// then the addition of the three dots does not add to the string length in
// determining the truncated string.
// example:
// truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket..."


// Solution #1 - mine
function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }
  if (num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str.slice(0, num-3) + '...';
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


// Solution #2 - mine - shorter with Conditional Operator
function truncateString2(str, num) {
  if (num >= str.length) {
    return str;
  }
  return num <= 3 ? str.slice(0, num) + '...' : str.slice(0, num-3) + '...';
}

truncateString2("A-tisket a-tasket A green and yellow basket", 11);


// Solution #3 - mine - even shorter with nested Conditional Operator
// not as easy to read as the one above
function truncateString3(str, num) {
  return num >= str.length ? str : (num <= 3 ? str.slice(0, num) + '...' : str.slice(0, num-3) + '...');
}

truncateString3("A-tisket a-tasket A green and yellow basket", 11);


// Solution #4 - put the Conditional Operator inside the .slice parameters!
// and you could shorten it more like solution #3
function truncateString4(str, num) {
  if (num >= str.length) {
    return str;
  }
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
}

truncateString4("A-tisket a-tasket A green and yellow basket", 11);