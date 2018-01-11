// write a function that will search an array for a given number and
// return if the number is found in the array.
// extra credit for also returning the index of the number if found.


var numbers = [7,5,8,9,4,3,1];

// Solution #1 - mine
function findInArray(array, value) {
  var indexes;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indexes = i;
    }
  }
  return indexes ? 'number is found at index #' + indexes : 'number not found';
}

console.log(findInArray(numbers, 5));   // "number is found at index #1"


// Solution #2 - mine also - better
function findInArray(array, value) {
  return array.indexOf(value);
}
