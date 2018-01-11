// Write a function that takes in an array of nested arrays of unknown depth and
// returns the flattened array.

var arr = [1, [2, 3, [4], [5, 6, 7]], 8];
// returns [1, 2, 3, 4, 5, 6, 7, 8]


// Solution #1
function flatten(arr) {
  var newArr;
  if (Array.isArray(arr)) {
    return (newArr = []).concat.apply(newArr, arr.map(flatten));
  }
  return arr;
}


// Solution #2
const flatten2 = (arr) => Array.isArray(arr) ? [].concat(...arr.map(flatten2)) : arr ;
