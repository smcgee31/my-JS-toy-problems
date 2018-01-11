// Write a function that Given two arrays of strings a1 and a2 
//return a sorted array r in lexicographical order of the strings 
// of a1 which are substrings of strings of a2.
// examples:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]
// example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []


// Solution #1 - mine
function inArray(a1,a2){
  var result = [];
  for (var i = 0; i < a1.length; i++) {
    for (var j = 0; j < a2.length; j++) {
      var re = new RegExp(a1[i], 'gi');
      if (typeof a1[i] === 'string' && re.test(a2[j])) {  //using typeof tests out the input so that anything other than a string gets ignored
        if (result.indexOf(a1[i]) === -1) {
          result.push(a1[i]);
        }
      }
    }
  }
  return result.sort();
}

inArray(["live", "mice", "mstro", "ong"], ["lively", "alive", "harp", "sharp", "armstrong"]); //returns [ 'live', 'mstro', 'ong' ]


// Solution #2 - wow, love this code...
// and I guess it doesn't care about inputs other than strings? 
function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}


// Solution #3 - done in a single for-loop!
// and it looks at the problem in the reverse direction from how I looked at it. (I think)
function inArray(a1,a2){
  var output = [];
  for (var i = 0; i < a1.length; i++) 
   if (a2.toString().indexOf(a1[i]) != -1 && output.indexOf(a1[i]) == -1) output.push(a1[i]);
  return output.sort();
}


// Solution #4 - a for-loop inside of a .filter() method --- interesting.
function inArray(a1,a2){
  return a1.filter(function(val) {
    for(var i = 0; i<a2.length;i++)
      if(a2[i].indexOf(val) > -1)
        return true;
    return false;
  }).sort();
}