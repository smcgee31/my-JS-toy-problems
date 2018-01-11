// There is an array with some numbers. All numbers are equal except for one. 
// Try to find the unique number!


// Solution #1 - my first, pretty inefficient - takes codewars.com server too 
// long to run all tests, but passes any tests that I can think of to devise.
function findUniq(arr) {
  var arrays = [];
  for(let i = 0; i < arr.length; i++) {
    var filtered = arr.filter((val) => {
      return val === arr[i];  
    });
    arrays.push(filtered);
  }
  for(let i = 0; i < arrays.length; i++) {
    if(arrays[i].length === 1) {
      var result = arrays[i][0];
      return result;
    }
  }
}


// Solution #2 - my second, also inefficient : 373 steps - takes codewars.com server too
// long to run all test, but passes any tests that I can think of to devise.
function findUniq(arr) {
  for(var i = 0; i < arr.length; i++) {
    var mapped = arr.map((val) => {
      if(arr[i] === val) { return val; }
    });
    var result = [];
    for(var j = 0; j < mapped.length; j++) {
      if(mapped[j] !== undefined) { result.push(mapped[j]); }
    }
    if(result.length === 1) {
      return result[0];  
    }
  }
}


// Solution #3 - my third, MUCH more efficient - only takes 25 steps.
function findUniq(arr) {
  arr.sort();
  for(var i = 0; i < arr.length; i) {
    var mark = arr.lastIndexOf(arr[i]);
    if(mark === 0) {
      return arr[i]
    } else {
      arr.splice(0, mark+1);
    }
  }
}


// Solution #4 - my fourth AFTER understanding the real problem...
// the codewars.com problem says that ALL numbers are equal except one, find the one.
// super easy!
function findUniq(arr) {
  arr.sort();
  return arr[0] === arr[1] ? arr[arr.length-1] : arr[0];
}


// Solution #5 - this one is pretty cool... 
// 
function findUniq(arr) {
  // assign the first three to a, b, and c
  var [a,b,c] = arr.slice(0,3);
  // then check to see if it is the first character and if so return it. (because if a is the unique one then b and c have to be equal)
  if( a != b && a!=c ) return a;
  // otherwise, knowing that it is not the first one you can compare each one after 
  // that to the first one and if not equal then that IS the answer! Simple and brilliant.
  for( var x of arr ) if( x!=a ) return x
}
