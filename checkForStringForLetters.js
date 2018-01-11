// Write a function that returns true if the string in the first element of the array contains all of the letters of the string in the second element of the array
// example:
// mutation(["Alien", "line"]) should return true
// mutation(["hello", "hey"]) should return false


// Solution #1 - mine
function mutation(arr) {
	var a = arr[0].toLowerCase();
	var b = arr[1].toLowerCase();
	for (var i = 0; i < b.length; i++) {
		if (a.indexOf(b[i]) === -1) {
			return false;
		}
	}
  return true;
}

mutation(["hello", "hey"]);



// Solution #2 - using .every()
function mutation2(arr) {
  return arr[1].toLowerCase().split('').every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

mutation2(["hello", "hey"]);