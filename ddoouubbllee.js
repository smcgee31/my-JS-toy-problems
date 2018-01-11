// write a function that takes in a string and returns a new string with every
// character doubled  =>  'what's up dude!' => 'wwhhaatt''ss  uupp  dduuddee!!'


// mine:
function doubleChar(str) {
  var newStr = [];
  str2 = str.split('');
  for (var i = 0; i < str.length; i++) {
      newStr.splice(i + 1 , 0, str[i] + str2[i]);
  }
  newStr = newStr.join('');
  return newStr;
}
doubleChar('whats_up_dude!');

// 
// another of mine using ES6 for-of loop
const doubleChar = (str) => {
  let newStr = '';
  for(let char of str) {
    newStr += char + char;
  }
  return newStr;
}
doubleChar('vivint.Solar is cool!');


//OPTION #2
function doubleChar(str) {
  var word = '';
  for (var i = 0; i < str.length; i++){
    word += str[i] + str[i];
  }
  return word;
}
doubleChar('whats_up_dude!');



//OPTION #3
function doubleChar(str) {
    return str.split('').map(function(s){return s+s;}).join('');
}
doubleChar('whats_up_dude!');
