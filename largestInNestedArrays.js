// Write a function that returns an array of the largest numbers
// found in the nested arrays given.
// example:
// [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
// should return [5, 27, 39, 1001]


// Solution #1 - mine
function largestOfFour(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    arr[i].sort(function (a, b) {
      return b - a;
    });
    result.push(arr[i][0]);
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Solution #2 - mine -- es6
const largestOfFour2 = arr => {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => b - a);
    result.push(arr[i][0]);
  }
  return result;
};

largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Solution #3
function largestOfFour3(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(Math.max.apply(Math, arr[i]));
  }
  return result;
}

largestOfFour3([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Solution #4 - same as above but uses .map instead of a for-loop
function largestOfFour4(arrs) {
  return arrs.map(function(arr){
    return Math.max.apply(null, arr);
  });
}

largestOfFour4([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);