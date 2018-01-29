/*
Create a function that takes two or more arrays and returns an array of the 
symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical 
term "symmetric difference" of two sets is the set of elements which are in either of 
the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric 
difference you take (say on a set D = {2, 3}), you should get the set with elements 
which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/



function sym(args) {
  const arr = [...arguments];
  const reduce = (arrayList) => {
    if (arr.length === 1) { return arr; }
    let temp = [];
    arr[0].forEach(e => {
      if (!arr[1].includes(e)) temp.push(e);
    });
    arr[1].forEach(e => {
      if (!arr[0].includes(e)) temp.push(e);
    });
    arr.splice(0, 2);
    arr.unshift(temp);
    reduce(arr);
  }

  reduce(arr);
  const result = Array.from(new Set(arr[0])).sort((a,b) => a-b);
  return result;
}

// sym([1, 2, 3], [5, 2, 1, 4]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);



// Solution #2 - Intermediate solution from FCC

function sym() {
  var args = Array.prototype.slice.call(arguments);
  var getDiff = function(arr1, arr2) {

    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
  };

  var symarray = args.reduce(getDiff, []);
  var unique = symarray.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });

  return unique;
}


//Solution #3 - advance solution from FCC

function sym() {
  const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));
  const result = [...arguments]
    .map(arr => new Set(arr))
    .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));

  return [...result];
}


// Solution #4 - pretty concise student solution

function sym(args) {
  var arr = Array.from(arguments);
  arr = arr.reduce(function(a, b) {
    var aNotB = a.filter(function(val) { return !b.includes(val); });
    var bNotA = b.filter(function(val) { return !a.includes(val); });
    return aNotB.concat(bNotA);
  });

  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
}