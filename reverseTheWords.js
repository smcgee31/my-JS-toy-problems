// Write a reverseWords function that accepts a string a parameter, 
// and reverses each word in the string. Every space should stay, 
// so you cannot use words from Prelude.


// Solution #1 - mine
function reverseWords(str) {
  var arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
  	arr[i] = arr[i].split('').reverse().join('');
  }
  return arr.join(' ');
}


// Solution #2 - mine - uses .map
function reverseWords(str) {
  var arr = str.split(' ');
  var newArr = arr.map(function (val){
    return val.split('').reverse().join('');
  });
  return newArr.join(' ');
}

// Solution #3 - mine - same as above just more concise
function reverseWords(str) {
  return str.split(' ').map(function (val){return val.split('').reverse().join('');}).join(' ');
}


// Solution #4 - this one is the same but simpler and is .045 ms shorter in performance without using .map
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}