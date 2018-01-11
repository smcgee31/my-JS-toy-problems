// Your task is to sort a given string. Each word in the String will contain a single number. 
//This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"


// Solution #1 - mine
function rearangeSentence(str) {
  var arr = str.split(' ');
  var newArr = [];
    for(var i = 1; i <= arr.length; i++) {
      var ii = i.toString();
      for(var j = 0; j < arr.length; j++) {
        var a = arr[j].split('');
        if(a.includes(ii)) {
          newArr.push(arr[j]);
        }
      }
    }
  return newArr.join(' ');
}


// Solution #2 - mine - way better performance
function rearangeSentence(str) {
  var arr = str.split(' ');
  var newArr = [];
  for(var i = 1; i <= arr.length; i++) {
    var ii = i.toString();
    newArr.push(arr[arr.findIndex(e => e.includes(ii))]);
  }
  return newArr.join(' ');
}


// Solution #3 - uses .sort() with a numbers compare callback with regex
// I didn't know you could do that!
function rearangeSentence(words){
  return words.split(' ')
  .sort((a, b) => { return a.match(/\d/) - b.match(/\d/);})
  .join(' ');
}


// Solution #4 - pretty close to mine EXCEPT simply using indexOf()
// I didn't know that indexOf() would find the number inside the word!
function rearangeSentence(words){
  var array = words.split(' ');
  var sortedArray = [];
  for(var i = 0; i <= array.length; i++) {
    for(var j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}
