// Write a function that splits an array (first argument) into groups
// the length of size (second argument) and returns them as a
// two-dimensional array.
// example:
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
// should return [[0, 1, 2], [3, 4, 5], [6]]


// Solution #1 - mine
function chunkArrayInGroups(arr, size) {
	var result = [];
	while (arr.length > 0) {
      result.push(arr.splice(0, size));
    }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);



// Solution #2 - very basic and lots of code!
function chunkArrayInGroups2(arr, size) {

  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0)
    result.push(temp);
  return result;
}

chunkArrayInGroups2(["a", "b", "c", "d"], 2);


// Solution #3 - using .slice() instead of .splice()
function chunkArrayInGroups3(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}

chunkArrayInGroups3(["a", "b", "c", "d"], 2);