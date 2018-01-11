// Write a function that returns the remaining elements of an array after
// chopping off n elements from the head.
// The head means the beginning of the array, or the zeroth index.
// example:
// slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].


// Solution #1 - mine
function slasher(arr, howMany) {
  for (var i = howMany; i > 0; i--) {
    arr.shift();
  }
  return arr;
}

slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);


// Solution #2 - using .splice()
function slasher2(arr, howMany) {
  // remove the head
  arr.splice(0, howMany);
  // return the remaining or the tail
  return arr;
}

slasher2([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);


// Solution #3 - using .slice() -- simplest!!
function slasher3(arr, howMany) {
  return arr.slice(howMany);
}

slasher3([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);