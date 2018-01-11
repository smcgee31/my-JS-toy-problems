// Return the lowest index at which a value (second argument) should
// be inserted into an array (first argument) once it has been sorted
// The returned value should be a number.
//
// examples:
// getIndexToIns([10, 20, 30, 40, 50], 35) should return 3
// getIndexToIns([10, 20, 30, 40, 50], 30) should return 2


// Solution #1 - mine
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a-b);
  return arr.indexOf(num);
}

getIndexToIns([10, 20, 30, 40, 50], 35);


// Solution #2 - seems more complicated
function getIndexToIns2(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return parseInt(a);
  }

  return arr.length;
}

getIndexToIns2([10, 20, 30, 40, 50], 35);


// Solution #3 - using .findIndex()
function getIndexToIns3(arr, num) {
  // sort and find right index
  var index = arr.sort((curr, next) => curr > next)
    .findIndex((currNum)=> num <= currNum);
  // Returns proper answer
  return index === -1 ? arr.length : index;
}

getIndexToIns23([10, 20, 30, 40, 50], 35);
