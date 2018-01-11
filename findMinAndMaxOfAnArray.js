// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples:
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]



// Solution #1 - mine
const minMax = (arr) => {
  let newArr = [];
  let min = Math.min(...arr);
  newArr.push(min);
  let max = Math.max(...arr);
  newArr.push(max);
  return newArr;
};



// Solution #2 - mine
const minMax2 = (arr) => {
  return [Math.min(...arr), Math.max(...arr)];
};


// Solution #3
function minMax3 (arr) {
  var a = arr.sort(function(a,b) {return a-b});
  return [a[0], a[a.length-1]];
}

