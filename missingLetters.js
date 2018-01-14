function fearNotLetter(str) {
  var numbers = str.split('').map(function(e) {
    return e.charCodeAt(0);
  });
  for(var i = 0; i < numbers.length-1; i++) {
    if(numbers[i+1] - numbers[i] !== 1) {
      var character = String.fromCharCode(numbers[i] + 1);
      return character;
    }
  }
  return undefined;
}

fearNotLetter("bcd");