// Write a function that confirms that a string ends with a partial string
// exaample:
// confirmEnding("Open sesame", "same") should return true.


// Solution #1 - mine
function confirmEnding(str, target) {
  return (str.substring(str.length, (str.length - target.length)) === target);
}

confirmEnding("Open sesame", "same");


// Solution #2 - cleaner - no need to specify the end of the string like above
function confirmEnding2(str, target) {
  return str.substr(-target.length) === target;
}

confirmEnding2("Open sesame", "same");