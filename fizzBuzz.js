


function fbzOne(count) {
  var array = [];
  for(var i = 0; i <= count; i++) {
    array.push(i);
    if(array[i] % 15 === 0) {
      array[i] = "fizzbuzz";
    }
    if(array[i] % 3 === 0) {
      array[i] = "fizz";
    }
    if(array[i] % 5 === 0) {
      array[i] = "buzz";
    }
  }
  console.log(array);
}

fbzOne(30);
