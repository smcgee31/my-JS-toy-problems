// Your objective is to add formatting to a plain number to display it as price.

// The function should return a string like this:
// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51

// Numbers should use the standard comma for every 3 numbers and dot to separate 
// the cents, cents need to be truncated to 2 decimals, in the case that the 
// decimal part of the number is 1 character long or none you should add 0's so 
// that the result will always have 2 decimal characters, the function will also 
// evaluate negative numbers.

// function should return a string 'NaN' if the input is not a valid number


// Solution #1 - mine - first try (kinda ugly)
var numberToPrice = function(number) {
  const isNumeric = (n) => { return !isNaN(parseFloat(n)) && isFinite(n); }
  if (!isNumeric(number)) { return 'NaN'; }
  var str, parts = [], dec;
  str = number.toString();
  if(str.match(/\./)) {
    parts = str.split('.');
    dec = parts[1].slice(0,2); 
    if(dec.length === 1) { dec += '0' }
  } else {
    parts[0] = str;
    dec = '00';
  }
  return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'.'+dec;
}



// Solution #2 - kinda mine - after learning a little from other answers but still alota my own
var numberToPrice = function(number) {
  const isNumeric = (n) => { return !isNaN(parseFloat(n)) && isFinite(n); }
  if (!isNumeric(number)) { return 'NaN'; }
  return number.toFixed(3).slice(0,-1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}