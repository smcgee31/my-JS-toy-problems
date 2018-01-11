// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// returns 'Bart'

// list([])
// returns ''



function list(names) {
    var nameList = '';
    for (var i = 0; i < names.length; i++) {
        if (names.length - 2 === i) {
            nameList += names[i].name + ' & ';
        } else if (names.length - 1 === i) {
            nameList += names[i].name;
        } else {
            nameList += names[i].name + ', ';
        }
    }
    console.log(nameList);
}


list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]);
list([{name: 'Bart'}, {name: 'Lisa'}]);
list([{name: 'Bart'}]);
list([]);


//OPTION #2

function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    }
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }




//OPTION #3

function list( names ){
  return names.reduce(function(prev, curr, i, arr){
    return prev + curr.name + (i<arr.length-2?', ':i==arr.length-2?' & ':'');
  }, '');
}


//OPTION #4
// SAY WHAT!?!?!?!
var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2");
