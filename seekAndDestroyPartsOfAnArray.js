// You will be provided with an initial array (the first argument in the
// destroyer function), followed by one or more arguments. Remove all elements
// from the initial array that are of the same value as these arguments.
//
// examples:
// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]
// destroyer([2, 3, 2, 3], 2, 3) should return []


// Solution #1 - mine
function destroyer(arr) {
	//turn the arguments into an actual array that can be worked with.
  var args = Array.from(arguments);
  //filter through the array and keep only the values that dont match args
  return arr.filter(function (val) {
    return args.indexOf(val) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

